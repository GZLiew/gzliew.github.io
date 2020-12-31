import { IStoryblok_IconAsset, IStoryblok_Link } from './storyblok'
import { SbEditableContent } from 'storyblok-react'

export type HomeBlok = {
  id?: string
  content: HomeContent
}

export type BaseCarouselItem = SbEditableContent & {
  image?: IStoryblok_IconAsset
  bannerPrimaryTitle?: string
  bannerSecondaryTitle?: string
}

export type CarouselBannerItem = BaseCarouselItem & {
  component: 'homeBannerItem'
}

export type CarouselPromotionalBannerItem = BaseCarouselItem & {
  component: 'homePromotionalBannerItem'
  ctaTitle?: string
  ctaLink?: IStoryblok_Link
}

export interface HomeContent extends SbEditableContent {
  carousel?: (CarouselBannerItem | CarouselPromotionalBannerItem)[]
}

export interface IQuickButton extends SbEditableContent {
  text?: string
  iconName?: string
  link?: IStoryblok_Link
  backgroundColor?: string
}
