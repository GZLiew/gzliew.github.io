import { SbEditableContent } from 'storyblok-react'

export type GSCheckListItem = {
  id?: string
  label?: string
}

export type GuestServiceType = {
  _uid?: string
  items?: GSCheckListItem[]
  minDays?: number
  selected?: string
}

export type GuestService = SbEditableContent & {
  icon?: string
  label?: string
  type?: GuestServiceType
}

export type GuestServiceContent = SbEditableContent & {
  headerTitle?: string
  services?: GuestService[]
}

export type GuestServiceProps = {
  id?: number
  content: GuestServiceContent
}
