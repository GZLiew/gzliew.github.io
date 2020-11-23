import { useRef, useEffect, ReactChild } from "react"
import { NotificationBg, NotificationWrapper, MessageWrapper, StyledButton } from "./order.styles"

import useToggle from "@/lib/hooks/useToggle"

type Props = {
  children?: ReactChild
}

const OrderInProgress = ({}: Props) => {
  const ref = useRef(null)
  const [isActive, toggle] = useToggle(true)

  useEffect(() => {
    if (!isActive) {
      setTimeout(() => {
        ref.current.style.display = "none"
      }, 200)
    }
  }, [isActive])

  return (
    <NotificationBg ref={ref} className={!isActive ? "out" : "in"}>
      <NotificationWrapper>
        <MessageWrapper>
          <span>Delivery at your doorstep</span>
          <h4>Your order is In-Progress </h4>
        </MessageWrapper>
        <StyledButton onClick={toggle} maxWidth="71px" height="40px">
          View
        </StyledButton>
      </NotificationWrapper>
    </NotificationBg>
  )
}

export default OrderInProgress
