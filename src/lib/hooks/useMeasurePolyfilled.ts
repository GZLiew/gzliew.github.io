import useMeasure from "react-use-measure"
import { ResizeObserver as Polyfill } from "@juggle/resize-observer"

export default () => {
  if ((global?.window as any)?.ResizeObserver) {
    return useMeasure()
  }
  return useMeasure({ polyfill: Polyfill })
}
