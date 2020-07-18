import React from "react"

import SbEditable from "storyblok-react"

import Container from "@/components/Container"
import HotelRating from "@/components/HotelInformation/HotelRating"
import HotelLocation from "@/components/HotelInformation/HotelLocation"

import { Wrapper, Logo, StyledTitle, SubHeading } from "./information.styles"

const HotelInformation = ({ blok, blokConfig }) => {
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
      </Container>
    </SbEditable>
  )
}

export default HotelInformation
