import React from 'react'
import SbEditable from 'storyblok-react'

import { HotelConfigContent } from '@/lib/types/hotelConfig'
import { HotelInfoContent } from '@/lib/types/hotelInfo'

import {
  StyledSection,
  ContentContainer,
  HeroImage,
  TopContent,
  BottomContent,
  HotelLogo
} from './SplashScreen.styles'

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
  preview?: boolean
}

const Welcome = ({ blok }: Props) => {
  return (
    <SbEditable content={blok}>
      <StyledSection>
        <HeroImage src="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg" />
        <ContentContainer>
          <TopContent />
          <BottomContent>
            <HotelLogo src="https://a.storyblok.com/f/87760/450x600/2733ab6342/tapendium-logo-image.png" />
          </BottomContent>
        </ContentContainer>
      </StyledSection>
    </SbEditable>
  )
}

export default Welcome
