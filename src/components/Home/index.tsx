import React from 'react'

import SbEditable from 'storyblok-react'

import { HomeContent } from '@/lib/types/homeContent'
import { HotelConfigContent } from '@/lib/types/hotelConfig'
import { ICommonLayout } from '@/lib/types/commonLayout'
import QuickButton from './QuickButtons'
import { StyledHomeContainer } from './home.styles'

interface Props {
  content: HomeContent
  blokConfig: HotelConfigContent
  navigationContent: ICommonLayout
}

const Home = ({ content, navigationContent }: Props) => {
  return (
    <SbEditable content={content}>
      <StyledHomeContainer>
        {navigationContent?.links.slice(0, 3).map((link, index) => (
          <QuickButton index={index} key={link._uid} item={link} />
        ))}
      </StyledHomeContainer>
    </SbEditable>
  )
}

export default Home
