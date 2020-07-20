import { GetStaticProps } from "next"
import Head from "next/head"
import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

import Layout from "@/components/Layout"
import Container from "@/components/Container"
import HotelRating from "@/components/HotelInformation/HotelRating"
import HotelLocation from "@/components/HotelInformation/HotelLocation"
import HotelFacility from "@/components/HotelInformation/HotelFacilities"

import { getHotelConfiguration, getHotelInformation } from "@/lib/api"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { HotelInfoProps } from "@/lib/types/hotelInfo"

interface Props {
  hotelConfig?: HotelConfigProps
  hotelInfo?: HotelInfoProps
  preview?: boolean
}

const Wrapper = styled.div`
  ${tw`flex items-center justify-between`}
`

const Logo = styled.img`
  max-width: 69px;
`
const StyledTitle = styled.h1`
  ${tw`text-2.5xl pb-2 font-bold`}
  color: ${({ theme }) => theme.colors.text.primary};
`
const SubHeading = styled.h2`
  ${tw`text-sm pt-4 font-regular`}
  color: ${({ theme }) => theme.colors.pink.primary};
`

export default function HotelInformation({ hotelConfig, hotelInfo, preview }: Props) {
  const subSectionsCount = hotelInfo?.content?.categories.reduce(
    (acc, category) => acc + category?.sub_sections.length,
    0
  )

  return (
    <Layout hotelConfig={hotelConfig} preview={preview}>
      <Head>
        <title>Hotel Information</title>
      </Head>
      <Container>
        <Wrapper>
          <Logo
            src={hotelConfig?.content?.hotel_logo?.filename}
            title={hotelConfig?.content?.hotel_logo.name}
          />

          <HotelRating rating={hotelInfo?.content?.hotel_rating[0]} />
        </Wrapper>

        <SubHeading>{hotelInfo?.content?.welcome_text}</SubHeading>
        <StyledTitle>{hotelConfig?.content?.hotel_name}</StyledTitle>
        <HotelLocation location={hotelInfo?.content?.location[0]} />

        <HotelFacility amenities={hotelInfo?.content?.scrolling_icons} categoriesCount={subSectionsCount} />
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
