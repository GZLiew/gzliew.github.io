import { SbEditableContent } from 'storyblok-react'
import { IStoryblok_IconAsset } from './storyblok'

export type SplashScreenContent = SbEditableContent & {
  welcomeImage: IStoryblok_IconAsset
  welcomeLogo: IStoryblok_IconAsset
  welcomeName: string
  welcomeMessage: string
  welcomeButtonText: string
}

export type SplashScreenProps = {
  id?: number
  content: SplashScreenContent
}
