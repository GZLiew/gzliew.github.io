import { useRef, useEffect } from "react"
import { NotificationBg, NotificationWrapper, MessageWrapper, StyledButton } from "./order.styles"

import useToggle from "@/lib/hooks/useToggle"

const OrderInProgress = () => {
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
        <StyledButton onClick={toggle} maxWith="71px" height="40px">
          View
        </StyledButton>
      </NotificationWrapper>
    </NotificationBg>
  )
}

export default OrderInProgress
