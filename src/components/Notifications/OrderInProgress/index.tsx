import { NotificationBg, NotificationWrapper, MessageWrapper, StyledButton } from "./order.styles"

import useToggle from "@/lib/hooks/useToggle"

const OrderInProgress = () => {
  const [isActive, toggle] = useToggle(true)

  return (
    <NotificationBg className={!isActive ? "out" : "in"}>
      <NotificationWrapper>
        <MessageWrapper>
          <span>Delivery at your doorstep</span>
          <h4>Your order is In-Progress </h4>
        </MessageWrapper>
        <StyledButton onClick={toggle} maxWith="71px" height="40px">
          View
        </StyledButton>
      </NotificationWrapper>
    </NotificationBg>
  )
}

export default OrderInProgress
