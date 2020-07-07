import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import Container from "./Container"

const StyledBar = styled.div(tw`
  border-b p-2 text-center bg-white
`)

const ExitLink = styled.a(tw`
underline hover:text-pink-100 duration-200 transition-colors
`)

type Prop = {
  preview?: boolean
}

const Alert = ({ preview }: Prop) => {
  if (!preview) return null
  return (
    <StyledBar>
      <Container>
        This is page is a preview {"  "}
        <ExitLink href="/api/exit-preview">Click here</ExitLink>
        {"  "}
        to exit preview mode.
      </Container>
    </StyledBar>
  )
}

export default Alert
