import { useState } from "react"

import SbEditable from "storyblok-react"

import Container from "@/components/Container"
import HotelRating from "@/components/HotelInformation/HotelRating"
import HotelLocation from "@/components/HotelInformation/HotelLocation"
import HotelFacilities from "@/components/HotelInformation/HotelFacilities"

import { Wrapper, Logo, StyledTitle, SubHeading, Section } from "./information.styles"
import GallerySlider from "./GallerySlider"
import GalleryGrid from "./GalleryGrid"
import { AboutSection, ReviewSection } from "./Sections"
import Categories from "./Categories"

import { HotelInfoContent } from "@/lib/types/hotelInfo"
import { HotelConfigContent } from "@/lib/types/hotelConfig"

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
}

const HotelInformation = ({ blok, blokConfig }: Props) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false)
  const [activeSliderPos, setActiveSliderPos] = useState(0)
  const toggleSlider = () => setIsSliderOpen(!isSliderOpen)

  const handleChangeSliderPos = (value: number) => {
    setActiveSliderPos(value)
    setIsSliderOpen(!isSliderOpen)
  }

  const subSectionsCount = blok?.categories.reduce((acc, category) => acc + category?.subsections.length, 0)

  return (
    <SbEditable content={blok}>
      <GallerySlider
        gallery={blok?.hotelPhotos[0]}
        activeSlide={activeSliderPos}
        isOpen={isSliderOpen}
        handleCloseClick={toggleSlider}
      />

      <Section>
        <Container>
          <GalleryGrid gallery={blok?.hotelPhotos[0]} handlePhotoClick={handleChangeSliderPos} />
          <Wrapper>
            <Logo src={blokConfig?.hotelLogo?.filename} title={blokConfig?.hotelLogo.name} />
            <HotelRating rating={blok?.hotelRating[0]} />
          </Wrapper>
          <SubHeading>{blok?.welcomeText}</SubHeading>
          <StyledTitle>{blokConfig?.hotelName}</StyledTitle>
          <HotelLocation location={blok?.location[0]} />
          <HotelFacilities amenities={blok?.scrollingIcons} categoriesCount={subSectionsCount} />
        </Container>
      </Section>

      <AboutSection content={blok?.aboutSection} />

      <Categories categories={blok?.categories} />

      <ReviewSection content={blok?.review} />
    </SbEditable>
  )
}

export default HotelInformation
