import { useRef, useState, useEffect, MutableRefObject } from "react"
import ResizeObserver from "resize-observer-polyfill"

interface Bounds {
  left: number
  top: number
  width: number
  height: number
}

function useMeasure<T extends HTMLElement>(): [{ ref: MutableRefObject<T> }, Bounds] {
  const ref = useRef<T>()
  const [bounds, set] = useState<Bounds>({
    left: 0,
    top: 0,
    width: 0,
    height: 0
  })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(() => (ro.observe(ref.current), ro.disconnect), [])
  return [{ ref }, bounds]
}

export default useMeasure
