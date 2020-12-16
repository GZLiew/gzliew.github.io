import React from 'react'

import SbEditable from 'storyblok-react'

import Container from '@/components/Container'
import QuickButtons from '@/components/Home/QuickButtons'
import { OrderInProgress, ShoppingBag } from '@/components/Notifications'
import { NotificationArea } from '@/components/Notifications/notifications.styles'
import { CheckoutInfo, Weather } from '@/components/Home/Widgets'

import { StyledTitle, SubHeading } from './home.styles'

import { HomeContent } from '@/lib/types/homeContent'
import { HotelConfigContent } from '@/lib/types/hotelConfig'

const modules = {
  weather: Weather
}

interface Props {
  content: HomeContent
  blokConfig: HotelConfigContent
}

const Home = ({ content, blokConfig }: Props) => {
  return (
    <SbEditable content={content}>
      <Container style={{ paddingBottom: '2rem' }}>
        <SubHeading>
          {content?.primaryWelcomeText} {blokConfig?.hotelName}
        </SubHeading>
        <StyledTitle>{content?.secondaryWelcomeText}</StyledTitle>
        <QuickButtons buttons={content?.quickButtons} />
        <CheckoutInfo />
        {content?.modules?.map((module) => (
          <React.Fragment key={module._uid}>
            {React.createElement(modules[module.component], {
              blok: { ...module },
              key: module._uid
            })}
          </React.Fragment>
        ))}
      </Container>
      <NotificationArea>
        <ShoppingBag />
        <OrderInProgress />
      </NotificationArea>
    </SbEditable>
  )
}

export default Home
