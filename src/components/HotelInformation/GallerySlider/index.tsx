import { useState, useRef, useEffect } from "react"

import { Transition, config } from "react-spring/renderprops.cjs"

import GalleryIcons from "@/assets/icons/GalleryIcons"

import {
  GalleryWrapper,
  DotsWrapper,
  Dots,
  DotThumbnail,
  Slide,
  Gallery,
  CloseButton,
  dotStyles
} from "./gallerySlider.styles"

import useLockBodyScroll from "@/lib/hooks/useLockBodyScroll"

import { IHotelPhoto } from "@/lib/types/hotelInfo"

interface Props {
  gallery: IHotelPhoto
  activeSlide: number
  isOpen: boolean
  handleCloseClick: () => void
}

const GallerySlider: React.FC<Props> = ({ gallery, activeSlide, isOpen, handleCloseClick }) => {
  const [activePosition, setActivePosition] = useState(activeSlide)

  // lock body scroll when GallerySlider is mounted
  const ref = useRef(null)
  useLockBodyScroll(isOpen, ref)

  // update active slide when activeSlide prop changes
  // This bind GalleryGrid item click with opening GallerySlider on
  // the slide matching its position value with the activeSlide value
  useEffect(() => {
    let mounted = true
    if (mounted) setActivePosition(activeSlide)

    return () => (mounted = false)
  }, [activeSlide])

  // scroll thumbnails based on active slide
  const dotsRef = useRef(null)
  useEffect(() => {
    // calculate spacing to take into account based on DotThumbnail border & margin dimensions
    const offset = (dotStyles.border + dotStyles.innerMargin) * 2
    const positionToScroll = Math.floor(
      activePosition * ((dotsRef?.current?.scrollWidth - offset) / gallery?.photos.length)
    )
    dotsRef?.current?.scroll({ left: positionToScroll, behavior: "smooth" })
  }, [activePosition])

  const handleChange = (value) => setActivePosition(value)

  return (
    <Transition
      native={true}
      items={isOpen}
      config={config.gentle}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}>
      {(show) =>
        show &&
        ((props) => (
          <GalleryWrapper ref={ref} style={props}>
            <CloseButton onClick={handleCloseClick}>{GalleryIcons.close}</CloseButton>
            <Gallery
              lazyLoad={true}
              keepDirectionWhenDragging={true}
              minDraggableOffset={5}
              value={activePosition}
              slides={gallery?.photos.map((photo) => (
                <Slide src={photo?.image} key={photo?._uid} onClick={handleCloseClick} />
              ))}
              onChange={handleChange}
            />
            <DotsWrapper ref={dotsRef}>
              <Dots
                value={activePosition}
                number={gallery?.photos?.length}
                onChange={handleChange}
                thumbnails={gallery?.photos.map((photo) => (
                  <DotThumbnail src={photo?.image} key={photo?._uid} />
                ))}
              />
            </DotsWrapper>
          </GalleryWrapper>
        ))
      }
    </Transition>
  )
}

export default GallerySlider
