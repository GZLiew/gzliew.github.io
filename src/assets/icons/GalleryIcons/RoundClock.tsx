const RoundClock = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H48V48H0z" transform="translate(-8 -8)" />
        <g fill="inherit" fillRule="nonzero">
          <path
            d="M16.004 0C9.532-.002 3.697 3.896 1.219 9.875-1.258 15.855.11 22.737 4.687 27.313c4.576 4.577 11.459 5.945 17.438 3.468 5.979-2.478 9.877-8.313 9.875-14.785C31.99 7.166 24.834.01 16.004 0zm0 29.757c-5.566.002-10.585-3.35-12.716-8.492-2.131-5.142-.955-11.062 2.98-14.998 3.936-3.937 9.855-5.115 14.997-2.985 5.143 2.13 8.496 7.148 8.496 12.714-.008 7.595-6.162 13.75-13.757 13.761z"
            transform="translate(-8 -8) translate(8 8)"
          />
          <path
            d="M16.201 14.804V5.168c0-.645-.492-1.168-1.1-1.168C14.493 4 14 4.523 14 5.168V15.26c.003.288.106.566.29.778l4.872 5.661c.419.401 1.056.401 1.475 0 .419-.401.484-1.074.15-1.557l-4.586-5.338z"
            transform="translate(-8 -8) translate(8 8)"
          />
        </g>
      </g>
    </svg>
  )
}

export default RoundClock
