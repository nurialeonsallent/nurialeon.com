export default function (props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      focusable="false"
      role="img"
      style={{
        display: "inline-block",
        height: "1em",
        verticalAlign: "middle",
        flexShrink: 0,
      }}
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      ></path>
    </svg>
  )
}
