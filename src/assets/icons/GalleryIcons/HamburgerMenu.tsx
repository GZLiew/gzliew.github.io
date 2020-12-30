const HamburgerMenu = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g opacity="0.6">
        <rect width="18" height="1.5" rx="0.75" fill="inherit" />
        <rect y="8" width="15" height="1.5" rx="0.75" fill="inherit" />
        <rect y="16" width="18" height="1.5" rx="0.75" fill="inherit" />
      </g>
    </svg>
  )
}

export default HamburgerMenu
