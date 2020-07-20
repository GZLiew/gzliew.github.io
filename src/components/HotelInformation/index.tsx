import React from "react"

import SbEditable from "storyblok-react"

import Container from "@/components/Container"
import HotelRating from "@/components/HotelInformation/HotelRating"
import HotelLocation from "@/components/HotelInformation/HotelLocation"
import HotelFacility from "@/components/HotelInformation/HotelFacilities"

import { Wrapper, Logo, StyledTitle, SubHeading } from "./information.styles"

import { HotelInfoContent } from "@/lib/types/hotelInfo"
import { HotelConfigContent } from "@/lib/types/hotelConfig"

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
}

const HotelInformation = ({ blok, blokConfig }: Props) => {
  const subSectionsCount = blok?.categories.reduce((acc, category) => acc + category?.sub_sections.length, 0)
  return (
    <SbEditable content={blok}>
      <Container>
        <Wrapper>
          <Logo src={blokConfig?.hotel_logo?.filename} title={blokConfig?.hotel_logo.name} />
          <HotelRating rating={blok?.hotel_rating[0]} />
        </Wrapper>

        <SubHeading>{blok?.welcome_text}</SubHeading>
        <StyledTitle>{blokConfig?.hotel_name}</StyledTitle>
        <HotelLocation location={blok?.location[0]} />
        <HotelFacility amenities={blok?.scrolling_icons} categoriesCount={subSectionsCount} />
      </Container>
    </SbEditable>
  )
}

export default HotelInformation
