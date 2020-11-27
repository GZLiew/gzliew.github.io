import React, { ReactNode, useRef } from "react"
import { useSwipeable } from "react-swipeable"
import { isFunction } from "lodash"

import { StyledTopNav, TopNavWrapper } from "./TopNav.styles"

type handleNavbarClick = () => void

type Props = {
  isOpen: boolean
  handleNavbarClick: handleNavbarClick
  children: (callback: handleNavbarClick) => ReactNode | ReactNode
}

const TopNav = ({ isOpen, handleNavbarClick, children }: Props) => {
  const ref = useRef(null)

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
