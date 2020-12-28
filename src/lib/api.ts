import { fetchAPI } from '@/lib/utils/fetchAPI'
import slugify from '@sindresorhus/slugify'

import { getLocalizedSlugNode } from './utils/getLocalizedSlug'
import processHotelPhotos from './utils/processHotelPhotos'

import { HotelInfoProps } from './types/hotelInfo'
import { HotelConfigProps } from './types/hotelConfig'

const BASE_PATH = 'pwa/'

export async function getHotelConfiguration(preview: boolean, language?: string): Promise<HotelConfigProps> {
  const data = await fetchAPI(
    `
    query ($slug: ID!) {
      HotelconfigurationItem(id: $slug) {
      id
      lang
      content {
        _editable
        _uid
        component
        hotelLogo {
          name
          filename
        }
        hotelLogoDark {
          name
          filename
        }
        hotelName
        primaryColor
        theme
        seoDescription
        seoBannerImage {
          filename
        }
      }
    }
  }
  `,
    { preview, variables: { slug: getLocalizedSlugNode(language, 'hotel-configuration') } }
  )
  return data?.HotelconfigurationItem
}

export async function getHomeData(preview: boolean, language?: string) {
  const data = await fetchAPI(
    `
    query ($slug: ID!) {
      HomeItem(id: $slug) {
      id
      content {
        _editable
        _uid
        component
        modules
        primaryWelcomeText
        quickButtons
        secondaryWelcomeText
      }
    }
  }
  `,
    { preview, variables: { slug: getLocalizedSlugNode(language, `${BASE_PATH}home`) } }
  )
  return data?.HomeItem
}

export async function getHotelInformation(preview: boolean, language?: string): Promise<HotelInfoProps> {
  const data: { HotelinformationItem: HotelInfoProps } = await fetchAPI(
    `
   query ($slug: ID!){
    HotelinformationItem(id: $slug) {
      id
      content {
        welcomeText
        location
        hotelRating
        component
        _uid
        _editable
        scrollingIcons
        categories
        hotelPhotos
        aboutSection
      }
    }
   }
  `,
    { preview, variables: { slug: getLocalizedSlugNode(language, `${BASE_PATH}hotel-information`) } }
  )

  const { categories, hotelPhotos, ...content } = data?.HotelinformationItem?.content

  const categoriesWithSlugs = categories.map((category) => ({
    slug: slugify(category.title),
    ...category
  }))

  const processedHotelPhotos = await processHotelPhotos(hotelPhotos)

  return {
    id: data?.HotelinformationItem?.id,
    content: {
      categories: categoriesWithSlugs,
      hotelPhotos: processedHotelPhotos,
      ...content
    }
  }
}

export async function getHotelGlobalNavigation(preview: boolean, language?: string) {
  const data = await fetchAPI(
    `
    query ($slug: ID!){
      CommonlayoutItem(id: $slug) {
        id
        content {
          navigation
          component
          _uid
          _editable
        }
      }
    }
  `,
    { preview, variables: { slug: getLocalizedSlugNode(language, 'layout') } }
  )
  return data?.CommonlayoutItem
}

export async function getLanguageCodes() {
  const data = await fetchAPI(`{ Space { languageCodes } }`, {
    preview: false
  })

  return data?.Space?.languageCodes
}

export const getGuestService = async (preview: boolean, language?: string) => {
  const data = await fetchAPI(
    `
  query ($slug: ID!) {
    GuestserviceItem(id: $slug) {
      content {
        _editable
        _uid
        component
        headerTitle
        services
      }
    }
  }
  `,
    { preview, variables: { slug: getLocalizedSlugNode(language, `${BASE_PATH}guest-service`) } }
  )

  return data?.GuestserviceItem
}

export const getSplashScreen = async (preview: boolean, language?: string) => {
  const data = await fetchAPI(
    `
    query ($slug: ID!) {
      SplashscreenItem(id: $slug) {
        id
        content {
          welcomeImage {
            filename
          }
          welcomeLogo {
            filename
          }
          welcomeName
          welcomeMessage
          welcomeButtonText
          component
          _uid
          _editable
        }
      }
    }
  `,
    { preview, variables: { slug: getLocalizedSlugNode(language, `${BASE_PATH}splash-screen`) } }
  )

  return data?.SplashscreenItem
}
