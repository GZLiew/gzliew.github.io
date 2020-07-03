import { GetStaticProps } from "next"
import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import Head from "next/head"

import Container from "@/components/Container"
import Layout from "@/components/Layout"
import ButtonStyled from "@/components/ButtonStyled"

import { getHotelConfiguration, getHomeData } from "@/lib/api"
import { HomeProps } from "@/lib/types/home"

const StyledTitle = styled.h1(tw`text-4xl pb-4`)
const SubHeading = styled.h1(tw`text-sm pt-4 text-gray-900`)

interface Props {
  hotelConfig?: any
  homeData?: HomeProps
  preview?: boolean
}

export default function Index({ hotelConfig, homeData, preview }: Props) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Welcome to {hotelConfig?.content?.hotel_name}</title>
      </Head>
      <Container>
        <SubHeading>
          {homeData?.content?.primary_welcome_text} {hotelConfig?.content?.hotel_name}
        </SubHeading>
        <StyledTitle>{homeData?.content?.secondary_welcome_text}</StyledTitle>
        <ButtonStyled onClick={() => alert("Welcome")}>Let’s Get Started</ButtonStyled>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const homeData = (await getHomeData(preview)) || []

  return {
    props: { hotelConfig, homeData, preview }
  }
}
