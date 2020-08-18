import React, { useState, useRef, useEffect, useLayoutEffect } from "react"

import { useTransition, config, useSpring } from "react-spring"

import SbEditable from "storyblok-react"
import Slider from "./Slider"

import GalleryIcons from "@/assets/icons/GalleryIcons"

import {
  GalleryWrapper,
  DotsWrapper,
  Dots,
  DotThumbnail,
  CloseButton,
  dotStyles,
  SlideImage,
  DotItem,
  DotButton
} from "./gallerySlider.styles"

import useLockBodyScroll from "@/lib/hooks/useLockBodyScroll"
import isiOSDevice from "@/lib/utils/isiOSDevice"

import { IHotelPhoto } from "@/lib/types/hotelInfo"

interface Props {
  gallery: IHotelPhoto
  activeSlide: number
  isOpen: boolean
  handleCloseClick: () => void
}

const GallerySlider: React.FC<Props> = ({ gallery, activeSlide, isOpen, handleCloseClick }) => {
  const [activePosition, setActivePosition] = useState(activeSlide)

  // hook slide-reveal animation to DotsWrapper
  const [areDotsVisible, setAreDotsVisible] = useState(true)
  const dotsSpringProps = useSpring({
    transform: areDotsVisible ? `translateY(0%)` : `translateY(100%)`,
    opacity: areDotsVisible ? 1 : 0
  })

  // fade effect when opening/closing the slider
  const fadeTransitions = useTransition(isOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle
  })

  // lock body scroll when GallerySlider is mounted
  const ref = useRef(null)
  // don't use lock-body-scroll on iOS devices...
  useLockBodyScroll(!isiOSDevice() && isOpen, ref)

  // ...instead, manually lock body scroll
  useLayoutEffect(() => {
    global?.document?.body.classList.toggle("lock", isOpen)
  }, [isOpen])

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

  useEffect(() => {
    if (!isOpen && !areDotsVisible) {
      setAreDotsVisible(true)
    }
  }, [isOpen])

  const handleDotClick = (id: number) => setActivePosition(id)

  const handlePhotoClick = () => setAreDotsVisible(!areDotsVisible)

  return (
    // needs to be a mounted element for proper recognition by body-scroll-lock
    <div ref={ref}>
      {fadeTransitions.map(
        ({ item, key, props }) =>
          item && (
            <GalleryWrapper key={key} style={props}>
              <CloseButton onClick={handleCloseClick}>{GalleryIcons.close}</CloseButton>
              <Slider
                slides={gallery?.photos.map((photo, i) => (
                  <SbEditable key={photo._uid} content={photo}>
                    <SlideImage
                      src={photo.image}
                      alt={`Gallery Photo ${i + 1}`}
                      draggable={false}
                      onClick={handlePhotoClick}
                    />
                  </SbEditable>
                ))}
                initialSlide={activeSlide}
                activePosition={activePosition}
                handleSlideChange={setActivePosition}
              />
              <DotsWrapper ref={dotsRef} style={dotsSpringProps}>
                <Dots>
                  {gallery?.photos.map((photo, idx) => (
                    <DotItem key={photo?._uid} onClick={() => handleDotClick(idx)}>
                      <DotButton className={idx === activePosition ? "selected" : null}>
                        <DotThumbnail src={photo?.image} />
                      </DotButton>
                    </DotItem>
                  ))}
                </Dots>
              </DotsWrapper>
            </GalleryWrapper>
          )
      )}
    </div>
  )
}

export default GallerySlider
