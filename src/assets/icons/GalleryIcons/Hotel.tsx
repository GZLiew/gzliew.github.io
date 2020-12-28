const Hotel = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 59" fill="currentColor" {...props}>
      <defs>
        <linearGradient id="5pmmhbyhya" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#605" />
          <stop offset="100%" stopOpacity=".5" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H80V80H0z" transform="translate(-16 -5)" />
        <g transform="translate(-16 -5) translate(16 5)">
          <circle cx="11" cy="11" r="11" fill="inherit" opacity=".207" transform="translate(28)" />
          <g stroke="inherit" strokeWidth="3">
            <path
              strokeLinecap="round"
              d="M34.957 9.801L38.224 9.801M34.957 17.968L38.224 17.968"
              transform="translate(0 13)"
            />
            <path
              fill="url(#5pmmhbyhya)"
              strokeLinecap="round"
              d="M25.156 17.968L28.423 17.968M25.156 35.937L28.423 35.937M25.156 9.801L28.423 9.801M10.454 32.67L10.454 35.937"
              transform="translate(0 13)"
            />
            <path
              d="M43.124 1.5H20.255c-.488 0-.93.198-1.25.518-.319.32-.517.761-.517 1.249v40.971h26.403V3.267c0-.488-.197-.93-.517-1.25-.32-.32-.762-.517-1.25-.517zM18.102 24.369H3.267c-.488 0-.93.198-1.25.518-.32.32-.517.761-.517 1.249v16.335c0 .488.198.93.518 1.25.32.32.761.517 1.249.517h14.835V24.369z"
              transform="translate(0 13)"
            />
            <path
              d="M36.59 27.636h-9.8c-.489 0-.93.198-1.25.518-.32.32-.518.761-.518 1.249v14.835h13.335V29.403c0-.488-.197-.93-.517-1.25-.32-.32-.762-.517-1.25-.517z"
              transform="translate(0 13)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Hotel
