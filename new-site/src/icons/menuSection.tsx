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
        verticalAlign: "text-top",
      }}
      {...props}
    >
      <path
        stroke="currentColor"
        fill="currentColor"
        d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
      ></path>
    </svg>
  )
}
