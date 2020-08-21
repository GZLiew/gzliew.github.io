import { useRef, useEffect } from "react"

interface Dimensions {
  width: number | undefined
  height: number | undefined
}

interface LoadEvent {
  currentTarget: {
    naturalWidth?: number
    naturalHeight?: number
  }
}

const useImageDimensions = (parentRef: React.MutableRefObject<Element>): [number, number] => {
  const imageDimensions = useRef<Dimensions>({ width: undefined, height: undefined })

  useEffect(() => {
    const slideImgElement = parentRef?.current?.querySelector("img")

    // get the image natural width & height
    const handleImgLoad = (e: Event & LoadEvent) => {
      imageDimensions.current = {
        width: e.currentTarget?.naturalWidth,
        height: e.currentTarget?.naturalHeight
      }
    }

    slideImgElement.addEventListener("load", handleImgLoad)
    return () => {
      slideImgElement.removeEventListener("load", handleImgLoad)
    }
  }, [])

  return [imageDimensions.current.width, imageDimensions.current.height]
}

export default useImageDimensions
