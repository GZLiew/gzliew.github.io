const Weather = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 28" {...props}>
      <defs>
        <linearGradient id="2uk31ae5ya" x1="50%" x2="50%" y1="0%" y2="99.731%">
          <stop offset="0%" stopColor="inherit" />
          <stop offset="100%" stopColor="inherit" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H48V48H0z" transform="translate(-5 -9)" />
        <g transform="translate(-5 -9) translate(5 9)">
          <circle cx="26.5" cy="8.5" r="8.5" fill="#F7B500" />
          <path
            fill="url(#2uk31ae5ya)"
            fillRule="nonzero"
            d="M38 22.372C38 25.48 35.388 28 32.167 28H8.143C3.646 28 0 24.482 0 20.143c0-4.34 3.646-7.856 8.143-7.856.13 0 .255.012.383.018C8.82 8.225 12.336 5 16.64 5c3.832 0 7.035 2.555 7.903 5.993.715-.334 1.515-.528 2.364-.528 3 0 5.428 2.343 5.428 5.238 0 .357-.037.706-.107 1.044C35.42 16.778 38 19.285 38 22.372z"
          />
        </g>
      </g>
    </svg>
  )
}

export default Weather
