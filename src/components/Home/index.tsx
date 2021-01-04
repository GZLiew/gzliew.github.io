import React, { useState } from 'react'
import { useRouter } from 'next/router'
import SbEditable from 'storyblok-react'

import { HomeContent } from '@/lib/types/homeContent'
import useMeasure from '@/lib/hooks/useMeasurePolyfilled'
import { HotelConfigContent } from '@/lib/types/hotelConfig'
import { ICommonLayout } from '@/lib/types/commonLayout'
import { IStoryblok_Link } from '@/lib/types/storyblok'
import { resolveUrl } from '@/lib/utils/resolveUrl'

import QuickButton from './QuickButtons'
import {
  StyledHomeContainer,
  SlideImage,
  SliderContainer,
  StyledSlider,
  SlideContentContainer,
  BannerSecondaryLabel,
  StyledBannerButton,
  BannerPrimaryLabel,
  PaginationContainer,
  Dot
} from './home.styles'

interface Props {
  content: HomeContent
  blokConfig: HotelConfigContent
  navigationContent?: ICommonLayout
}

const Home = ({ content, navigationContent }: Props) => {
  const [SliderContainerRef, { width: slideWidth }] = useMeasure()
  const [activePosition, setActivePosition] = useState(0)
  const router = useRouter()
  const { carousel } = content

  const onCtaClick = (url: IStoryblok_Link) => {
    const resolvedUrl = resolveUrl(url?.cached_url, url?.anchor)
    console.log(resolvedUrl)
    return router.push(resolvedUrl)
  }

  return (
    <SbEditable content={content}>
      <StyledHomeContainer>
        <SliderContainer ref={SliderContainerRef}>
          <StyledSlider
            initialSlide={0}
            slideWidth={slideWidth}
            activePosition={activePosition}
            slides={carousel.map((slide, i) => (
              <SbEditable key={slide?._uid} content={slide}>
                <SlideImage src={slide?.image?.filename} alt={`Gallery Photo ${i + 1}`} draggable={false} />
                <SlideContentContainer>
                  {slide?.bannerPrimaryTitle && (
                    <BannerPrimaryLabel>{slide?.bannerPrimaryTitle}</BannerPrimaryLabel>
                  )}
                  {slide?.bannerSecondaryTitle && (
                    <BannerSecondaryLabel>{slide?.bannerSecondaryTitle}</BannerSecondaryLabel>
                  )}
                  {slide.component === 'homePromotionalBannerItem' && slide?.ctaTitle && slide?.ctaLink && (
                    <StyledBannerButton
                      onClick={() => onCtaClick(slide?.ctaLink)}
                      raised={false}
                      size="small">
                      {slide?.ctaTitle}
                    </StyledBannerButton>
                  )}
                </SlideContentContainer>
              </SbEditable>
            ))}
            handleSlideChange={setActivePosition}
          />
          <PaginationContainer>
            {carousel.map((slide, idx) => (
              <Dot
                key={slide._uid}
                isFocused={activePosition === idx}
                onClick={() => setActivePosition(idx)}
              />
            ))}
          </PaginationContainer>
        </SliderContainer>
        {navigationContent?.links.slice(0, 3).map((link, index) => (
          <QuickButton index={index} key={link._uid} item={link} />
        ))}
      </StyledHomeContainer>
    </SbEditable>
  )
}

export default Home
