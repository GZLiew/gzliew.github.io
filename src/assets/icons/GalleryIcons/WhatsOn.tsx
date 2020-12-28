const WhatsOn = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" fill="currentColor" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H48V48H0z" transform="translate(-8 -8)" />
        <g
          stroke="inherit"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          transform="translate(-8 -8) translate(10 10)">
          <rect width="19" height="19" x="10" y="10" rx="2" />
          <path d="M4.385 19H2.923C1.31 19 0 17.691 0 16.077V2.923C0 1.31 1.309 0 2.923 0h13.154C17.69 0 19 1.309 19 2.923v1.462" />
        </g>
      </g>
    </svg>
  )
}

export default WhatsOn
