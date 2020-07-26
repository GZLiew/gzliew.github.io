import { useState } from "react"

import SbEditable from "storyblok-react"

import Container from "@/components/Container"
import HotelRating from "@/components/HotelInformation/HotelRating"
import HotelLocation from "@/components/HotelInformation/HotelLocation"
import HotelFacility from "@/components/HotelInformation/HotelFacilities"

import { Wrapper, Logo, StyledTitle, SubHeading, Section } from "./information.styles"
import GallerySlider from "./GallerySlider"
import GalleryGrid from "./GalleryGrid"
import { AboutSection } from "./Sections"
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

  const subSectionsCount = blok?.categories.reduce((acc, category) => acc + category?.sub_sections.length, 0)

  return (
    <SbEditable content={blok}>
      <GallerySlider
        gallery={blok?.hotel_photos[0]}
        activeSlide={activeSliderPos}
        isOpen={isSliderOpen}
        handleCloseClick={toggleSlider}
      />

      <Section>
        <Container>
          <GalleryGrid gallery={blok?.hotel_photos[0]} handlePhotoClick={handleChangeSliderPos} />
          <Wrapper>
            <Logo src={blokConfig?.hotel_logo?.filename} title={blokConfig?.hotel_logo.name} />
            <HotelRating rating={blok?.hotel_rating[0]} />
          </Wrapper>
          <SubHeading>{blok?.welcome_text}</SubHeading>
          <StyledTitle>{blokConfig?.hotel_name}</StyledTitle>
          <HotelLocation location={blok?.location[0]} />
          <HotelFacility amenities={blok?.scrolling_icons} categoriesCount={subSectionsCount} />
        </Container>
      </Section>

      <AboutSection content={blok?.about_section} />

      <Categories categories={blok?.categories} />
    </SbEditable>
  )
}

export default HotelInformation
