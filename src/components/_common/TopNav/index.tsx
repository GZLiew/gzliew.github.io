import React, { ReactNode, useRef } from "react"
import { useSwipeable } from "react-swipeable"
import { isFunction } from "lodash"

import { StyledTopNav, TopNavWrapper } from "./TopNav.styles"
import useLockBodyScroll from "@/lib/hooks/useLockBodyScroll"

type handleNavbarClick = () => void

type Props = {
  isOpen: boolean
  handleNavbarClick: handleNavbarClick
}

const TopNav: React.FunctionComponent<Props> = ({ isOpen, handleNavbarClick, children }) => {
  const ref = useRef(null)
  useLockBodyScroll(isOpen, ref)

  const handlers = useSwipeable({
    trackMouse: false,
    onSwipedDown: handleNavbarClick
  })

  return (
    <>
      <StyledTopNav isOpen={isOpen} ref={ref}>
        {isFunction(children) ? children(handleNavbarClick) : children}
      </StyledTopNav>
      <TopNavWrapper isOpen={isOpen} {...handlers} onClick={handleNavbarClick} />
    </>
  )
}

export default TopNav
