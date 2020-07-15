import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

const StyledContainer = styled.div(tw`container mx-auto px-5`)

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container
