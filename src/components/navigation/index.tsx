import React from 'react'

import SbEditable from 'storyblok-react'

import Container from '@/components/Container'

import { HOME_LINK } from '@/lib/constants'
import { ICommonLayout } from '@/lib/types/commonLayout'
import { HotelConfigContent } from '@/lib/types/hotelConfig'
import { StyledTitle, SubHeading, StyledBottomSheet, PageContainer } from './navigation.styles'
import NavItem from './NavItem'

interface Props {
  content: ICommonLayout
  blokConfig: HotelConfigContent
}

const Navigation = ({ content, blokConfig }: Props) => {
  return (
    <SbEditable content={content}>
      <PageContainer>
        <Container>
          <SubHeading>
            {content?.primaryWelcomeText} {blokConfig?.hotelName}
          </SubHeading>
          <StyledTitle>{content?.secondaryWelcomeText}</StyledTitle>
        </Container>
        <StyledBottomSheet>
          <NavItem item={HOME_LINK} />
          {content?.links.map((link) => (
            <SbEditable key={link._uid} content={content}>
              <NavItem item={link} />
            </SbEditable>
          ))}
        </StyledBottomSheet>
      </PageContainer>
    </SbEditable>
  )
}

export default Navigation
