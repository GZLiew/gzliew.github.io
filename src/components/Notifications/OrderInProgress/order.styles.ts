import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import { slideUp, slideDown } from "@/styles/animations"

import Button from "@/components/Button"

export const NotificationBg = styled.div`
  background: ${({ theme }) => theme.colors.notificationBg};
  width: 100%;
  padding: 15px;
  position: fixed;
  bottom: 0;

  &.in {
    opacity: 1;
    animation: ${slideUp} 0.4s ease;
  }

  &.out {
    opacity: 0;
    animation: ${slideDown} 0.4s ease;
  }
`

export const NotificationWrapper = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.widget.background};
  border-radius: 21px;
  box-shadow: 0 27px 7px -15px rgba(0, 0, 0, 0.18);

  ${tw`flex items-center justify-between`}
`

export const MessageWrapper = styled.div`
  font-size: 11px;

  & span {
    color: ${({ theme }) => theme.colors.text.alternate};
  }

  & h4 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 15px;
    ${tw`font-medium`}
  }
`

export const StyledButton = styled(Button)`
  font-size: 11px;
`
