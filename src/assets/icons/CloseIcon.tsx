import React from 'react'

const CloseIcon = (props) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id="close_icon_gradient" x1="100%" x2="0%" y1="185.612%" y2="185.612%">
          <stop offset="0%" stopColor="#4F5357" />
          <stop offset="100%" stopColor="#76797D" />
        </linearGradient>
      </defs>
      <path
        fill="url(#close_icon_gradient)"
        fillRule="evenodd"
        d="M7.09 6l4.684-4.684a.77.77 0 10-1.09-1.09L6 4.91 1.316.226a.77.77 0 10-1.09 1.09L4.91 6 .226 10.684a.77.77 0 101.09 1.09L6 7.09l4.684 4.684a.772.772 0 001.09-1.09L7.09 6z"
        transform="translate(6 6)"
      />
    </svg>
  )
}

export default CloseIcon
