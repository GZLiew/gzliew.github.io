import React from 'react'

const Ellipses = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="4" height="19" viewBox="0 0 4 19" fill="white" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle opacity="0.2" cx="2" cy="2" r="2" fill="inherit" />
      <circle opacity="0.2" cx="2" cy="17" r="2" fill="inherit" />
    </svg>
  )
}

export default Ellipses
