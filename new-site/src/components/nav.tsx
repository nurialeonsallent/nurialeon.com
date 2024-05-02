import MenuIcon from "~/icons/menu"
import MenuSectionIcon from "~/icons/menuSection"
import CloseIcon from "~/icons/close"

import { SITE_TITLE } from "../consts"
import { useState, type PropsWithChildren, type ReactNode } from "react"

type MenuSectionType = [ReactNode, string | [ReactNode, string][]][]

const menu = [
  [<>Inicio</>, "/"],
  ["Servicios", "/servicios"],
  [
    "Terapia",
    [
      ["Terapia A", "/a"],
      ["Terapia B", "/b"],
      ["Terapia C", "/c"],
      ["Terapia D", "/d"],
    ],
  ],
  ["Sobre mí", "/sobre-mi"],
] satisfies MenuSectionType

export default function ({ pathname }: { pathname: string }) {
  const [isGlobalMenuOpen, setGlobalMenuOpen] = useState(false)
  const toggleGlobalMenu = () => setGlobalMenuOpen((s) => !s)

  return (
    <nav
      className="group/nav flex items-center justify-center bg-neutral-100"
      data-nav
      data-open={isGlobalMenuOpen}
    >
      <div className="flex min-h-11 w-full max-w-screen-xl items-center justify-center gap-8 px-4 sm:min-h-12">
        <button onClick={toggleGlobalMenu} className="lg:hidden">
          <MenuIcon className="text-[32px]" />
        </button>
        <a href="/" className="grow lg:grow-0">
          {SITE_TITLE}
        </a>
        <ul className="fixed left-0 top-0 z-20 flex h-screen w-[90vw] max-w-[90vw] grow flex-col border-r-2 border-neutral-100 bg-white transition-all max-lg:group-data-[open=false]/nav:-translate-x-full lg:relative lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:justify-center lg:border-0 lg:bg-transparent">
          <li>
            <button
              className="min-h-11 w-full px-4 py-2 pb-8 text-right lg:hidden"
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
  const [isOpen, setOpen] = useState(false)
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
        onClick={() => setOpen((o) => !o)}
        className={`${isCurrentInside && "text-brand"} ${isCollapsible && "lg:group-hover/li:bg-white lg:group-hover/li:text-brand lg:group-data-[open=true]/li:bg-white lg:group-data-[open=true]/li:text-brand"}`}
      >
        {title}
        {isCollapsible && (
          <MenuSectionIcon className="ml-2 rotate-180 transition-all max-lg:group-data-[open=true]/li:rotate-0" />
        )}
      </NavLink>
      {isCollapsible && (
        <ul
          className={`left-0 top-full ml-4 hidden w-[300px] flex-col bg-white group-data-[open=true]/li:flex max-lg:group-data-[current=true]/li:flex lg:z-10 lg:ml-0 lg:shadow-2xl lg:group-hover/li:absolute lg:group-hover/li:flex lg:group-data-[open=true]/li:absolute`}
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
      className={`${className ?? ""} group/a inline-block w-full px-8 py-3 text-left font-semibold uppercase tracking-wider aria-[current=page]:text-brand hover:text-brand max-lg:pr-1`}
      aria-current={active ? "page" : "false"}
    >
      <span className="relative">
        {children}
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-brand opacity-0 transition-all group-data-[collapsible=false]/a:group-aria-[current=page]/a:opacity-100 lg:group-aria-[current=page]/a:opacity-100 lg:group-hover/li:group-data-[collapsible=true]/a:group-aria-[current=page]/a:opacity-0"></div>
      </span>
    </a>
  )
}
