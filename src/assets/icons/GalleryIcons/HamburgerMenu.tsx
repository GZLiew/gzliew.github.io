const HamburgerMenu = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currenColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g opacity="0.6">
        <rect width="18" height="1.5" rx="0.75" fill="white" />
        <rect y="8" width="15" height="1.5" rx="0.75" fill="white" />
        <rect y="16" width="18" height="1.5" rx="0.75" fill="white" />
      </g>
    </svg>
  )
}

export default HamburgerMenu
