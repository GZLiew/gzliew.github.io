import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

export const DetailsWrapper = styled.div`
  ${tw`
    flex
    items-start
    p-6
  `}
  border-bottom: 3px solid ${({ theme }) => theme.colors.guestDetailsBorder};

  & img {
    ${tw`
      flex-none
      mr-5
    `}
    max-width: 41px;
  }

  .details {
    color: ${({ theme }) => theme.colors.text.primary};

    h4 {
      ${tw`
        font-bold
        mb-1
      `}
      color: ${({ theme }) => theme.colors.text.primary};
    }

    p {
      ${tw`
        text-xs
        mb-1
      `}
    }
  }
`
