import React from "react"

import { SIZES, StyledCircle, StyledPath, StyledSvg } from "./LoadingIndicator.styles"

type SvgProps = React.SVGProps<SVGSVGElement>
type Props = {
  size?: keyof typeof SIZES
}

const LoadingIndicator = (props: SvgProps & Props) => {
  const { size = "sm" } = props

  return (
    <StyledSvg xmlns="http://www.w3.org/2000/svg" size={size} fill="none" viewBox="0 0 24 24" {...props}>
      <StyledCircle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <StyledPath
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </StyledSvg>
  )
}

export default LoadingIndicator
