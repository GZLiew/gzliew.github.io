import { SbEditableContent } from 'storyblok-react'

export type GSCheckListItem = {
  id?: string
  label?: string
}

export type CommonData = {
  _uid?: string
  selected?: 'custom' | 'checklist' | 'now' | 'future' | 'feedback'
}

export type DateData = CommonData & {
  maxDays?: number
}

export type CheckListData = CommonData & {
  items?: GSCheckListItem[]
  maxChecklistItems?: number
}

export type GuestService<T = any> = SbEditableContent & {
  icon?: string
  label?: string
  data?: CommonData & T
}

export type GuestServiceContent = SbEditableContent & {
  headerTitle?: string
  services?: GuestService[]
}

export type GuestServiceProps = {
  id?: number
  content: GuestServiceContent
}
