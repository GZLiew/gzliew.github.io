import React from "react"

const UpDownArrows = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="19"
      viewBox="0 0 10 19"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M8.98609 6C9.9865 6 10.2811 4.98943 9.71489 4.42293L5.66421 0.290843C5.29105 -0.0834789 4.6858 -0.10355 4.31365 0.271775L0.262466 4.36372C-0.245244 4.87453 -0.0216516 6 0.979264 6C2.0312 6 8.18676 6 8.98609 6Z"
        fill="inherit"
        fillOpacity="0.2"
      />
      <path
        d="M1.01391 13C0.0134978 13 -0.281125 14.0106 0.28511 14.5771L4.33579 18.7092C4.70895 19.0835 5.3142 19.1036 5.68635 18.7282L9.73753 14.6363C10.2452 14.1255 10.0217 13 9.02074 13C7.9688 13 1.81324 13 1.01391 13Z"
        fill="inherit"
        fillOpacity="0.2"
      />
    </svg>
  )
}

export default UpDownArrows
