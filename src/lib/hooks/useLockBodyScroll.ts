import { useLayoutEffect } from 'react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

const useLockBodyScroll = (isActive, ref) => {
  useLayoutEffect(() => {
    isActive ? disableBodyScroll(ref.current) : enableBodyScroll(ref.current)
    // Re-enable scrolling when component unmounts
    return () =>
      // clear all body scroll locks on unmounting
      clearAllBodyScrollLocks()
  }, [isActive])
}

export default useLockBodyScroll
