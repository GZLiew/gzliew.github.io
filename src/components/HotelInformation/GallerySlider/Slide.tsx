import { useZoom } from "react-instagram-zoom-slider"
import { animated, interpolate, OpaqueInterpolation } from "react-spring"

import { Slide as StyledSlide } from "./gallerySlider.styles"

import { MutableRefObject } from "react"

interface Props {
  onScale: ({ scale: number }) => void
  minScale?: number
  maxScale?: number
}

type useZoomProps = [
  MutableRefObject<HTMLDivElement>,
  OpaqueInterpolation<number>,
  OpaqueInterpolation<number>,
  OpaqueInterpolation<number>,
  OpaqueInterpolation<any>
]

const AnimatedSlide = animated(StyledSlide)

// blatant copy of https://github.com/skozer/react-instagram-zoom-slider/blob/master/src/components/Slide/Slide.js
const Slide: React.FC<Props> = ({ onScale, children, minScale = 1, maxScale = 4 }) => {
  const [element, scale, translateX, translateY, middleTouchOnElement]: useZoomProps = useZoom({
    minScale,
    maxScale,
    onScale
  })

  return (
    <AnimatedSlide
      ref={element}
      style={{
        transform: interpolate(
          [scale, translateX, translateY],
          (sc, x, y) => `translate3d(${x}px, ${y}px, 0) scale3d(${sc}, ${sc}, 1)`
        ),
        transformOrigin: middleTouchOnElement.interpolate((x, y) => `${x}px ${y}px 0`)
      }}>
      {children}
    </AnimatedSlide>
  )
}

export default Slide
