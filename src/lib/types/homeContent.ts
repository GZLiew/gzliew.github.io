import { IStoryblok_Link } from './storyblok'
import { SbEditableContent } from 'storyblok-react'

export type HomeBlok = {
  id?: string
  content: HomeContent
}

export interface HomeContent extends SbEditableContent {
  primaryWelcomeText?: string
  secondaryWelcomeText?: string
  quickButtons?: IQuickButton[]
}

export interface IQuickButton extends SbEditableContent {
  text?: string
  iconName?: string
  link?: IStoryblok_Link
  backgroundColor?: string
}
