import { useEffect, useRef, useState, useCallback, useLayoutEffect } from "react"
import { useSpring } from "react-spring"
import { useDrag } from "react-use-gesture"

import Slide from "./Slide"

import { StyledSlider } from "./gallerySlider.styles"

import isiOSDevice from "@/lib/utils/isiOSDevice"

interface Props {
  initialSlide: number
  activePosition: number
  slides: JSX.Element[]
  handleSlideChange: (number) => void
}

const clamp = (value, min, max) => Math.min(Math.max(min, value), max)

const Slider: React.FC<Props> = ({ initialSlide, activePosition, slides, handleSlideChange }) => {
  // Almost all of this is straight out of https://github.com/skozer/react-instagram-zoom-slider/blob/master/src/hooks/useSlider.js
  // If https://github.com/skozer/react-instagram-zoom-slider/issues/13 is resolved, we could use useSlider hook directly.
  const [{ x }, set] = useSpring(() => ({
    x: typeof window !== "undefined" ? -window.innerWidth * initialSlide : 0,
    scale: 1,
    config: {
      tension: 270,
      clamp: true
    }
  }))

  const index = useRef(activePosition)

  // update index ref when a Dot is clicked
  useEffect(() => {
    index.current = activePosition
    set({
      x: -index.current * window.innerWidth
    })
  }, [activePosition])

  // Slide numbers (for display purposes only)
  const [currentSlide, updateSlide] = useState(activePosition)
  const [zooming, setZooming] = useState(false)

  const onScale = useCallback(
    (slideProps) => {
      set({
        scale: slideProps.scale
      })
      if (slideProps.scale === 1) {
        setZooming(false)
      } else {
        setZooming(true)
      }
    },
    [set]
  )

  const bind = useDrag(
    ({ down, movement: [xMovement], direction: [xDir], distance, swipe: [swipeX], cancel, touches }) => {
      // We don't want to interrupt the pinch-to-zoom gesture
      if (touches > 1) {
        cancel()
      }

      // We have swiped past halfway
      if (!down && distance > window.innerWidth / 2) {
        // Move to the next slide
        const slideDir = xDir > 0 ? -1 : 1
        index.current = clamp(index.current + slideDir, 0, slides.length - 1)

        set({
          x: -index.current * window.innerWidth + (down ? xMovement : 0),
          immediate: false
        })
      } else if (swipeX !== 0) {
        // We have detected a swipe - update the new index
        index.current = clamp(index.current - swipeX, 0, slides.length - 1)
      }

      // Animate the transition
      set({
        x: -index.current * window.innerWidth + (down ? xMovement : 0),
        immediate: down
      })

      // Update the slide number for display purposes
      updateSlide(index.current)
    },
    {
      axis: "x",
      bounds: {
        left: currentSlide === slides.length - 1 ? 0 : -Infinity,
        right: index.current === 0 ? 0 : Infinity,
        top: 0,
        bottom: 0
      },
      rubberband: true,
      enabled: slides.length > 1
    }
  )

  // update parent activePosition state value
  // Is there a better way to do this?
  useEffect(() => {
    handleSlideChange(currentSlide)
  }, [currentSlide])

  // recalculate slider position value (x) when orientation changes
  useLayoutEffect(() => {
    const mql = global?.window?.matchMedia("(orientation: portrait)")
    const handleOriention = (e: MediaQueryListEvent) => {
      if (isiOSDevice()) {
        // wait a bit to read the innerWidth as older iOS devices have a delay updating its value
        setTimeout(() => {
          set({ x: -index.current * global?.window?.innerWidth, immediate: true })
        }, 50)
      } else {
        set({ x: -index.current * global?.window?.innerWidth, immediate: true })
      }
    }

    mql.addListener(handleOriention)

    return () => {
      mql.removeListener(handleOriention)
    }
  }, [])

  // <StyledSlider> is a direct copy from https://github.com/skozer/react-instagram-zoom-slider/blob/master/src/components/Slider/Slider.js <AnimatedSlider>
  return (
    <StyledSlider
      isZooming={zooming}
      {...bind()}
      style={{
        transform: x.interpolate((slideX) => `translateX(${slideX}px)`)
      }}>
      {slides.map((slide, idx) => (
        <Slide onScale={onScale} key={idx}>
          {slide}
        </Slide>
      ))}
    </StyledSlider>
  )
}

export default Slider
