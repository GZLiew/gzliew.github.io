import React, { ReactNode, useRef } from "react"
import { OverlayContainer } from "./Overlay.styles"
import useLockBodyScroll from "@/lib/hooks/useLockBodyScroll"

type OverlayContainerProps = React.ComponentProps<typeof OverlayContainer>
type Props = {
  children?: ReactNode
  isOpen?: boolean
  onOverlayClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Overlay = ({ children, isOpen, onOverlayClick, ...restProps }: OverlayContainerProps & Props) => {
  const ref = useRef(null)
  useLockBodyScroll(isOpen, ref)

  return (
    <OverlayContainer ref={ref} isOpen={isOpen} onClick={onOverlayClick} {...restProps}>
      {children}
    </OverlayContainer>
  )
}

export default Overlay
