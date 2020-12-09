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
  blok: HomeContent
  blokConfig: HotelConfigContent
}

const Home = ({ blok, blokConfig }: Props) => {
  return (
    <SbEditable content={blok}>
      <Container style={{ paddingBottom: '2rem' }}>
        <SubHeading>
          {blok?.primaryWelcomeText} {blokConfig?.hotelName}
        </SubHeading>
        <StyledTitle>{blok?.secondaryWelcomeText}</StyledTitle>
        <QuickButtons buttons={blok?.quickButtons} />
        <CheckoutInfo />
        {blok?.modules?.map((module) => (
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
