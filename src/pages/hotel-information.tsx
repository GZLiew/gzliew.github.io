import { GetStaticProps } from "next"
import Head from "next/head"
import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

import Layout from "@/components/Layout"
import Container from "@/components/Container"

import { getHotelConfiguration, getHotelInformation } from "@/lib/api"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { HotelInfoProps } from "@/lib/types/hotelInfo"

interface Props {
  hotelConfig?: HotelConfigProps
  hotelInfo?: HotelInfoProps
  preview?: boolean
}

const LogoWrapper = styled.div`
  & img {
    max-width: 69px;
    margin-top: 38px;
  }
`
const StyledTitle = styled.h1`
${tw`text-2.5xl pb-4 font-bold`}
color: ${({ theme }) => theme.colors.text.primary};
`
const SubHeading = styled.h2`
  ${tw`text-sm pt-4 font-regular`}
  color: ${({ theme }) => theme.colors.pink.primary};
`

export default function HotelInformation({ hotelConfig, hotelInfo, preview }: Props) {
  return (
    <Layout hotelConfig={hotelConfig} preview={preview}>
      <Head>
        <title>Hotel Information</title>
      </Head>
      <Container>
        <LogoWrapper>
          <img
            src={hotelConfig?.content?.hotel_logo?.filename}
            title={hotelConfig?.content?.hotel_logo.name}
          />
        </LogoWrapper>
        <SubHeading>{hotelInfo?.content?.welcome_text}</SubHeading>
        <StyledTitle>{hotelConfig?.content?.hotel_name}</StyledTitle>
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = null }) => {
  const hotelConfig = (await getHotelConfiguration(preview)) || []
  const hotelInfo = (await getHotelInformation(preview)) || []

  return {
    props: { hotelConfig, hotelInfo, preview }
  }
}
