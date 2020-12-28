const Netflix = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 34" fill="currentColor" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H48V48H0z" transform="translate(-15 -7)" />
        <path
          fill="inherit"
          fillRule="nonzero"
          d="M12.667 0L12.667 17 6.333 0 0 0 0 34 6.333 34 6.333 16.999 12.667 34 19 34 19 0z"
          transform="translate(-1 -7) translate(15 7)"
        />
      </g>
    </svg>
  )
}

export default Netflix
