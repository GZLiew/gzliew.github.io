import { useTheme } from "@emotion/react"

import { DetailsWrapper, GuestInfo, LanguageSwitcher } from "./guestDetails.styles"

import LanguageSwitcherIcon from "@/assets/icons/language-switcher"

import { HotelLogo } from "@/lib/types/hotelConfig"

interface Props {
  guestPhoto: HotelLogo
  name?: string
  roomNumber?: number
  guestNumber?: number
}

const GuestDetails = ({ guestPhoto, name = "Alex Keenan", roomNumber = 206, guestNumber = 4 }: Props) => {
  const theme = useTheme()

  const handleLangSwitcherClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
  }

  return (
    <DetailsWrapper>
      <img src={guestPhoto?.filename} title={guestPhoto?.name} />
      <GuestInfo>
        <h4>{name}</h4>
        <p>Room number: {roomNumber}</p>
        <p>Number of guests: {guestNumber}</p>
      </GuestInfo>

      <LanguageSwitcher onClick={handleLangSwitcherClick}>
        <LanguageSwitcherIcon
          primaryColor={theme.colors.pink.primary}
          altColor={theme.colors.pink.secondary}
        />
      </LanguageSwitcher>
    </DetailsWrapper>
  )
}

export default GuestDetails
