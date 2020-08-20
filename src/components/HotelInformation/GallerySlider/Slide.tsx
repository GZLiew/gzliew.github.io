import { useZoom } from "react-instagram-zoom-slider"
import { animated, interpolate, OpaqueInterpolation, useSpring } from "react-spring"

import { Slide as StyledSlide } from "./gallerySlider.styles"
import { MutableRefObject, useLayoutEffect, useEffect, useRef } from "react"

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
  const imageDimensions = useRef({ width: undefined, height: undefined })
  // wait for the image to load to reveal it, preventing a flash of the image without the enforced aspect-ratio
  const opacityProps = useSpring({ opacity: imageDimensions?.current?.width ? 1 : 0 })

  useEffect(() => {
    if (element?.current) {
      const slideImgElement = element?.current?.querySelector("img")

      // get the image natural width & height
      const handleImgLoad = (
        e: Event & { currentTarget: { naturalWidth?: number; naturalHeight?: number } }
      ) => {
        imageDimensions.current = {
          width: e.currentTarget?.naturalWidth,
          height: e.currentTarget?.naturalHeight
        }
      }

      slideImgElement.addEventListener("load", handleImgLoad)
      return () => {
        slideImgElement.removeEventListener("load", handleImgLoad)
      }
    }
  }, [])

  return (
    <AnimatedSlide
      ref={element}
      style={{
        transform: interpolate(
          [scale, translateX, translateY],
          (sc, x, y) => `translate3d(${x}px, ${y}px, 0) scale3d(${sc}, ${sc}, 1)`
        ),
        transformOrigin: middleTouchOnElement.interpolate((x, y) => `${x}px ${y}px 0`),
        ...opacityProps
      }}
      dimensionWidth={imageDimensions.current.width}
      dimensionHeight={imageDimensions.current.height}>
      {children}
    </AnimatedSlide>
  )
}

export default Slide
