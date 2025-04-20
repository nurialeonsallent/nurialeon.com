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
        fill="currentColor"
        d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"
      ></path>
    </svg>
  )
}
