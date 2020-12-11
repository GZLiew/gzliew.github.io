const Ellipsis = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 24" {...props}>
      <path fill="none" d="M0 0h12v24H0z" />
      <path
        d="M6 4a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2zm0 6a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2zm0 6a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2z"
        fill="inherit"
      />
    </svg>
  )
}

export default Ellipsis
