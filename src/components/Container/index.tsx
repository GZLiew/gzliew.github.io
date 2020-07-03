import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

const StyledContainer = styled.div(tw`container mx-auto px-5`)

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
