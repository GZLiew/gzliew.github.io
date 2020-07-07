import { GetStaticProps } from "next"
import Head from "next/head"
import styled from "@emotion/styled"

import Layout from "@/components/Layout"
import Container from "@/components/Container"

import { getHotelConfiguration } from "@/lib/api"
import { HotelConfigProps } from "@/lib/types/hotelConfig"

interface Props {
  hotelConfig?: HotelConfigProps
  preview?: boolean
}

const LogoWrapper = styled.div`
  & img {
    max-width: 69px;
    margin-top: 38px;
  }
`

export default function HotelInformation({ hotelConfig, preview }: Props) {
  return (
    <Layout hotelConfig={hotelConfig} preview={preview}>
      <Head>
        <title>Hotel Information</title>
      </Head>
      <Container>
        <LogoWrapper>
          <img src={hotelConfig?.content.hotel_logo?.filename} title={hotelConfig?.content.hotel_logo.name} />
        </LogoWrapper>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []

  return {
    props: { hotelConfig, preview }
  }
}
