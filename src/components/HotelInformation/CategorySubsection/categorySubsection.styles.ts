import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const SubsectionWrapper = styled.div`
  ${tw`flex items-start mb-8 text-xs`}
  color: ${({ theme }) => theme?.colors?.text?.alternate};

  & > div {
    ${tw`flex-1`}
  }

  & > p {
    ${tw`mb-4`}
  }
`

export const SubsectionIcon = styled.img`
  ${tw`block flex-none w-4 mt-1 ml-3 mr-6`}
`

export const SubsectionTitle = styled.h5`
  ${tw`mb-2 text-md font-medium`}
  color: ${({ theme }) => theme?.colors?.text?.primary};
  -webkit-tap-highlight-color: transparent;
`
