import React from 'react'

const HamburgerMenu = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id="prefix__a" x1="100%" x2="0%" y1="185.612%" y2="185.612%">
          <stop offset="0%" stopColor="#4F5357" />
          <stop offset="100%" stopColor="#76797D" />
        </linearGradient>
        <linearGradient id="prefix__b" x1="100%" x2="0%" y1="185.612%" y2="185.612%">
          <stop offset="0%" stopColor="#4F5357" />
          <stop offset="100%" stopColor="#76797D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(6 8)">
        <rect width="12" height="2" fill="url(#prefix__a)" rx="1" className="first-line" />
        <rect width="7" height="2" y="6" fill="url(#prefix__b)" rx="1" />
      </g>
    </svg>
  )
}

export default HamburgerMenu
