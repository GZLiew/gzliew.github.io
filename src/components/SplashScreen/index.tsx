import React from 'react'
import SbEditable from 'storyblok-react'

import { HotelConfigContent } from '@/lib/types/hotelConfig'
import { SplashScreenContent } from '@/lib/types/splashScreen'

import {
  StyledSection,
  ContentContainer,
  HeroImage,
  TopContent,
  BottomContent,
  HotelLogo,
  InfoDetail,
  HotelLogoWrapper,
  InfoWrapper,
  InfoTitle,
  ButtonWrapper
} from './SplashScreen.styles'
import Button from '../_common/Button'
import NextIcon from '@/assets/icons/NextIcon'

interface Props {
  blok: SplashScreenContent
  blokConfig: HotelConfigContent
  preview?: boolean
}

const SplashScreen = ({ blok }: Props) => {
  return (
    <SbEditable content={blok}>
      <StyledSection>
        <HeroImage src={blok?.welcomeImage.filename} />
        <ContentContainer>
          <TopContent />
          <BottomContent>
            <HotelLogoWrapper>
              <HotelLogo src={blok?.welcomeLogo.filename} />
            </HotelLogoWrapper>
            <InfoWrapper>
              <InfoTitle>{blok?.welcomeName}</InfoTitle>
              <InfoDetail>{blok?.welcomeMessage}</InfoDetail>
            </InfoWrapper>
            <ButtonWrapper>
              <Button size="large" withIcon>
                {blok?.welcomeButtonText}
                <NextIcon fill="currentColor" />
              </Button>
            </ButtonWrapper>
          </BottomContent>
        </ContentContainer>
      </StyledSection>
    </SbEditable>
  )
}

export default SplashScreen
