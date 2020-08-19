function isiOSDevice(): boolean {
  return (
    ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(
      global?.window?.navigator?.platform
    ) ||
    // iPad on iOS 13 detection
    (global?.window?.navigator?.userAgent.includes("Mac") && "ontouchend" in document)
  )
}

export default isiOSDevice
