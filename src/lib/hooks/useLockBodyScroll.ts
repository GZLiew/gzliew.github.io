import { useLayoutEffect } from "react"

const useLockBodyScroll = (isActive) => {
  useLayoutEffect(() => {
    const body = document.querySelector("body")
    isActive ? body.classList.add("lock") : body.classList.remove("lock")
    // Re-enable scrolling when component unmounts
    return () => body.classList.remove("lock")
  }, [isActive]) // Array with boolean to run effect when the status change effect
}

export default useLockBodyScroll
