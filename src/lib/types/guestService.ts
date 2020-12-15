import { SbEditableContent } from 'storyblok-react'

export type GSCheckListItem = {
  id?: string
  label?: string
}

export type CommonData = {
  _uid?: string
  selected?: string
}

export type DateData = CommonData & {
  maxDays?: number
}

export type CheckListData = CommonData & {
  items?: GSCheckListItem[]
  maxChecklistItems?: number
}

export type GuestService = SbEditableContent & {
  icon?: string
  label?: string
  data?: DateData | CheckListData
}

export type GuestServiceContent = SbEditableContent & {
  headerTitle?: string
  services?: GuestService[]
}

export type GuestServiceProps = {
  id?: number
  content: GuestServiceContent
}
