import { ILayoutNavigationLink } from '@/lib/types/commonLayout'

export const CMS_URL = 'https://www.storyblok.com/'
export const HOME_OG_IMAGE_URL = 'https://a.storyblok.com/f/87760/640x733/b188817250/gray-building.jpg'
export const APP_DESCRIPTION = 'tapendium'
export const APP_NAME = 'Tapendium'
export const HOME_LINK: ILayoutNavigationLink = {
  component: 'link',
  _uid: 'homelink-navitem',
  url: {
    cached_url: '/'
  },
  iconName: 'home',
  title: 'Home'
}

export const NAVIGATION_LINK: ILayoutNavigationLink = {
  component: 'link',
  _uid: 'navigationlink-navitem',
  url: {
    cached_url: '/navigation'
  },
  iconName: 'hamburgerMenu',
  title: 'Menu'
}
