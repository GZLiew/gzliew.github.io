import xw from 'xwind'
import styled from '@emotion/styled'

export const DetailsWrapper = styled.div`
  ${xw`
    flex
    items-start
    p-6
  `}
  border-bottom: 3px solid ${({ theme }) => theme.colors.guestDetailsBorder};

  & img {
    ${xw`
      flex-none
      mr-5
    `}
    max-width: 41px;
  }
`

export const GuestInfo = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};

  h4 {
    ${xw`
      font-bold
      mb-1
    `}
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    ${xw`
      text-xs
      mb-1
    `}
  }
`
