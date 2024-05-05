import MenuIcon from "~/icons/menu"
import MenuSectionIcon from "~/icons/menuSection"
import CloseIcon from "~/icons/close"

import { SITE_TITLE } from "../consts"
import { useState, type PropsWithChildren, type ReactNode } from "react"
import LogoIcon from "~/icons/logo"

type MenuSectionType = [ReactNode, string | [ReactNode, string][]][]

const menu = [
  [<>Inicio</>, "/"],
  [
    "Terapia",
    [
      ["Terapia A", "/a"],
      ["Terapia B", "/b"],
      ["Terapia C", "/c"],
      ["Terapia D", "/d"],
    ],
  ],
  [
    "Tratamientos",
    [
      ["Tratamientos A", "/ta"],
      ["Tratamientos B", "/tb"],
      ["Tratamientos C", "/tc"],
      ["Tratamientos D", "/td"],
    ],
  ],
  [
    "Centro",
    [
      ["Equipo", "/equipo"],
      ["Sobre mí", "/sobre-mi"],
    ],
  ],
  ["Blog", "/blog"],
  ["Contacto", "/contacto"],
] satisfies MenuSectionType

export default function ({ pathname }: { pathname: string }) {
  const [isGlobalMenuOpen, setGlobalMenuOpen] = useState(false)
  const toggleGlobalMenu = () => setGlobalMenuOpen((s) => !s)

  return (
    <nav
      className="group/nav flex items-center justify-center bg-neutral-100 font-title"
      data-nav
      data-open={isGlobalMenuOpen}
    >
      <div className="flex min-h-11 w-full max-w-screen-xl items-center justify-center gap-8 sm:min-h-12">
        <a
          href="/"
          className="flex grow items-center justify-start gap-2 pl-2 lg:pl-4"
        >
          <LogoIcon className="text-[32px]" />
          <span className="text-base font-semibold text-brand">
            {SITE_TITLE}
          </span>
        </a>
        <button onClick={toggleGlobalMenu} className="pr-4 lg:hidden">
          <MenuIcon className="text-[32px]" />
        </button>
        <ul className="fixed right-0 top-0 z-20 flex h-screen w-[90vw] max-w-[90vw] grow flex-col  bg-white transition-all max-lg:group-data-[open=false]/nav:translate-x-[101%] lg:relative lg:h-auto lg:w-auto lg:max-w-[900px] lg:flex-row lg:items-center lg:justify-between lg:border-0 lg:bg-transparent lg:pr-4">
          <li>
            <button
              className="w-full px-4 py-4 pt-14 text-right lg:hidden"
              onClick={toggleGlobalMenu}
            >
              <CloseIcon className="text-[32px]" />
            </button>
          </li>
          {menu.map((s, i) => (
            <MenuSection key={i} pathname={pathname} section={s} />
          ))}
        </ul>
      </div>
      <div
        className="fixed left-0 top-0 z-10 hidden h-screen w-screen backdrop-blur-sm transition-all max-lg:group-data-[open=true]/nav:block"
        onClick={toggleGlobalMenu}
      ></div>
    </nav>
  )
}

function MenuSection({
  pathname,
  section: [title, content],
}: PropsWithChildren<{
  pathname: string
  section: MenuSectionType[0]
}>) {
  const isCurrentInside = matchUrl(content, pathname)
  const [isOpen, setOpen] = useState<boolean | "">("")
  const isCollapsible = typeof content !== "string"
  return (
    <li
      className="group/li relative w-auto"
      data-open={isCollapsible ? isOpen : undefined}
      data-current={isCollapsible ? isCurrentInside : undefined}
    >
      <div
        data-open={isCollapsible ? isOpen : undefined}
        data-current={isCollapsible ? isCurrentInside : undefined}
        className="absolute left-1 top-0 z-10 hidden h-full w-1 rounded bg-brand max-lg:data-[current=true]:block max-lg:data-[open=true]:block"
      ></div>
      <NavLink
        active={isCurrentInside}
        href={isCollapsible ? "#" : content}
        data-collapsible={isCollapsible}
        onClick={() => setOpen((o) => (o === "" ? !isCurrentInside : !o))}
        className={`${isCurrentInside && "text-brand"} ${isCollapsible && "lg:group-hover/li:bg-white lg:group-hover/li:text-brand lg:group-data-[open=true]/li:bg-white lg:group-data-[open=true]/li:text-brand"}`}
      >
        {title}
        {isCollapsible && (
          <MenuSectionIcon className="ml-2 rotate-180 transition-all max-lg:group-data-[current=true]/li:group-data-[open='']/li:rotate-0 max-lg:group-data-[open=true]/li:rotate-0" />
        )}
      </NavLink>
      {isCollapsible && (
        <ul
          className={`left-0 top-full ml-4 hidden w-[300px] flex-col bg-white group-data-[open=true]/li:flex max-lg:group-data-[current=true]/li:group-data-[open='']/li:flex lg:z-10 lg:ml-0 lg:shadow-2xl lg:group-hover/li:absolute lg:group-hover/li:flex lg:group-data-[open=true]/li:absolute`}
        >
          {content.map((c, i) => (
            <MenuSection key={i} pathname={pathname} section={c} />
          ))}
        </ul>
      )}
    </li>
  )
}

function matchUrl(href: string | MenuSectionType, pathname: string): boolean {
  if (typeof href === "string") {
    return href === pathname || href === "/" + pathname.match(/[^\/]+/g)?.[0]
  }

  return href.some((s) => matchUrl(s[1], pathname))
}

function NavLink({
  children,
  href,
  className,
  active,
  ...props
}: PropsWithChildren<{
  className?: string
  href: string
  active: boolean
  onClick?: () => void
}>) {
  return (
    <a
      {...props}
      href={href}
      className={`${className ?? ""} group/a inline-block w-full px-8 py-3 text-left font-semibold uppercase tracking-wider aria-[current=page]:text-brand hover:text-brand max-lg:pr-1 lg:px-4`}
      aria-current={active ? "page" : "false"}
    >
      <span className="relative">
        {children}
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-brand opacity-0 transition-all group-data-[collapsible=false]/a:group-aria-[current=page]/a:opacity-100 lg:group-aria-[current=page]/a:opacity-100 lg:group-data-[open=true]/li:group-data-[collapsible=true]/a:group-aria-[current=page]/a:opacity-0 lg:group-hover/li:group-data-[collapsible=true]/a:group-aria-[current=page]/a:opacity-0"></div>
      </span>
    </a>
  )
}
