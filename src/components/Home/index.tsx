import React from "react"

import SbEditable from "storyblok-react"

import Container from "@/components/Container"
import QuickButtons from "@/components/Home/QuickButtons"
import { OrderInProgress, ShoppingBag } from "@/components/Notifications"
import { NotificationArea } from "@/components/Notifications/notifications.styles"
import { CheckoutInfo, Weather } from "@/components/Home/Widgets"

import { StyledTitle, SubHeading } from "./home.styles"

const modules = {
  weather: Weather
}

const Home = ({ blok, blokConfig }) => {
  return (
    <SbEditable content={blok}>
      <Container>
        <SubHeading>
          {blok?.primary_welcome_text} {blokConfig?.hotel_name}
        </SubHeading>
        <StyledTitle>{blok?.secondary_welcome_text}</StyledTitle>
        <QuickButtons buttons={blok?.quick_buttons} />
        <CheckoutInfo />
        {blok?.modules?.map((module) => (
          <>
            {React.createElement(modules[module.component], {
              blok: { ...module },
              key: module._uid
            })}
          </>
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
