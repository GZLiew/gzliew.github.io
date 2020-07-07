import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const LogoWrapper = styled.header`
  ${tw`
    relative
    flex justify-between items-center
    mt-10
    mb-12
  `}
  & img {
    max-width: 45px;
  }
`
