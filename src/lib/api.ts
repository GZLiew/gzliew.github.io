import { fetchAPI } from "@/lib/utils/fetchAPI"

export async function getHotelConfiguration(preview) {
  const data = await fetchAPI(
    `
    {
      HotelconfigurationItem(id: "hotel-configuration") {
      id
      content {
        hotel_logo {
          name
          filename
        }
        hotel_name
        primary_color
        secondary_color
        theme
      }
    }
  }
  `,
    { preview }
  )
  return data?.HotelconfigurationItem
}

export async function getHomeData(preview) {
  const data = await fetchAPI(
    `
    {
      HomeItem(id: "home") {
      id
      content {
        _editable
        _uid
        component
        modules
        primary_welcome_text
        quick_buttons
        secondary_welcome_text
      }
    }
  }
  `,
    { preview }
  )
  return data?.HomeItem?.content
}

export async function getHotelInformation(preview) {
  const data = await fetchAPI(
    `
   {
    HotelinformationItem(id: "hotel-information") {
      content {
        welcome_text
        location
        hotel_rating
      }
    }
   }
  `,
    { preview }
  )
  return data?.HotelinformationItem
}

export async function getHotelGlobalNavigation(preview) {
  const data = await fetchAPI(
    `
    {  
      CommonlayoutItem(id: "layout") {
        content {
          navigation
          component
          _uid
          _editable
        }
      }
    }
  `,
    { preview }
  )
  return data?.CommonlayoutItem?.content
}
