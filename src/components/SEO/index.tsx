import React from "react"
import Head from "next/head"

import { HOME_OG_IMAGE_URL } from "@/lib/constants"

import { HotelConfigProps } from "@/lib/types/hotelConfig"

interface Props {
  title: string
  hotelConfig: HotelConfigProps
}

const SEO = ({ title, hotelConfig }: Props) => {
  return (
    <Head>
      <title>
        {title} | {hotelConfig?.content?.hotelName}
      </title>
      {hotelConfig?.content?.hotelName && (
        <meta name="application-name" content={hotelConfig?.content?.hotelName} />
      )}
      {hotelConfig?.content?.hotelName && (
        <meta name="apple-mobile-web-app-title" content={hotelConfig?.content?.hotelName} />
      )}
      {hotelConfig?.content?.seoDescription && (
        <meta name="description" content={hotelConfig?.content?.seoDescription} />
      )}
      {hotelConfig?.content?.seoBannerImage ? (
        <meta property="og:image" content={hotelConfig?.content?.seoBannerImage.filename} key="ogImage" />
      ) : (
        <meta property="og:image" content={HOME_OG_IMAGE_URL} key="ogImage" />
      )}
      {hotelConfig?.content?.primaryColor && (
        <meta name="theme-color" content={hotelConfig?.content?.primaryColor?.color} />
      )}
    </Head>
  )
}

export default SEO
