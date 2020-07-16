import { GetStaticProps } from "next"
import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import Head from "next/head"

import Container from "@/components/Container"
import Layout from "@/components/Layout"
import QuickButtons from "@/components/QuickButtons"
import { CheckoutInfo, Weather } from "@/components/Widget"
import { OrderInProgress, ShoppingBag } from "@/components/Notifications"
import { NotificationArea } from "@/components/Notifications/notifications.styles"

import { getHotelConfiguration, getHomeData, getHotelGlobalNavigation } from "@/lib/api"
import { HomeProps } from "@/lib/types/home"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { NavigationType } from "@/lib/types/linkItem"

const StyledTitle = styled.h2`
${tw`text-1xl pb-4 font-semibold`}
color: ${({ theme }) => theme.colors.text.primary};
margin-bottom: 38px;
`
const SubHeading = styled.h1`
  ${tw`text-sm pt-4 font-regular`}
  color: ${({ theme }) => theme.colors.text.alternate};
`

interface Props {
  hotelConfig?: HotelConfigProps
  homeData?: HomeProps
  layoutNavigation?: NavigationType
  preview?: boolean
}

export default function Index({ hotelConfig, homeData, layoutNavigation, preview }: Props) {
  return (
    <Layout navLinks={layoutNavigation?.navigation} hotelConfig={hotelConfig} preview={preview}>
      <Head>
        <title>Welcome to {hotelConfig?.content?.hotel_name}</title>
      </Head>
      <Container>
        <SubHeading>
          {homeData?.content?.primary_welcome_text} {hotelConfig?.content?.hotel_name}
        </SubHeading>
        <StyledTitle>{homeData?.content?.secondary_welcome_text}</StyledTitle>
        <QuickButtons buttons={homeData?.content?.quick_buttons} />
        <CheckoutInfo />
        <Weather variant={hotelConfig?.content?.theme} title="Weather Today" />
      </Container>
      <NotificationArea>
        <ShoppingBag />
        <OrderInProgress />
      </NotificationArea>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const homeData = (await getHomeData(preview)) || []
  const layoutNavigation = (await getHotelGlobalNavigation(preview)) || []

  return {
    props: { hotelConfig, homeData, layoutNavigation, preview }
  }
}
