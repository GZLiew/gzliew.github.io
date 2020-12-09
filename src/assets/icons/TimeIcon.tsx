import React from 'react'

const TimeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g opacity="0.5">
        <path
          d="M8.5 0C3.81099 0 0 3.81099 0 8.5C0 13.189 3.81099 17 8.5 17C13.189 17 17 13.189 17 8.5C17 3.81099 13.189 0 8.5 0ZM8.5 15.5429C4.61429 15.5429 1.45714 12.3857 1.45714 8.5C1.45714 4.61429 4.61429 1.45714 8.5 1.45714C12.3857 1.45714 15.5429 4.61429 15.5429 8.5C15.5429 12.3857 12.3857 15.5429 8.5 15.5429Z"
          fill="inherit"
        />
        <path d="M8.76134 3.99609H7.3042V9.76862L12.124 9.74994V8.27412H8.76134V3.99609Z" fill="inherit" />
      </g>
    </svg>
  )
}

export default TimeIcon
