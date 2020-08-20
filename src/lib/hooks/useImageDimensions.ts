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

const useImageDimensions = (
  parentRef: React.MutableRefObject<Element>,
  isCurrentOrNext: boolean
): [number, number] => {
  const imageDimensions = useRef<Dimensions>({ width: undefined, height: undefined })

  useEffect(() => {
    if (!isCurrentOrNext) return
    const slideImgElement = parentRef?.current?.querySelector("img")
    console.log(slideImgElement.src)

    // get the image natural width & height
    imageDimensions.current = {
      width: slideImgElement?.naturalWidth,
      height: slideImgElement?.naturalHeight
    }
  }, [isCurrentOrNext])

  return [imageDimensions.current.width, imageDimensions.current.height]
}

export default useImageDimensions
