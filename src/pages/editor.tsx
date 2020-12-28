import React from 'react'

import HotelInformation from '@/components/HotelInformation'
import RoomService from '@/components/RoomService'
import GuestService from '@/components/GuestService'
import ContactDetail from '@/components/ContactDetail'
import OrderSuccess from '@/components/OrderSuccess'
import OrderConfirmation from '@/components/OrderConfirmation'
import SplashScreen from '@/components/SplashScreen'
import Home from '@/components/Home'
import Layout from '@/components/DefaultLayout'

import {
  getGuestService,
  getHomeData,
  getHotelConfiguration,
  getHotelGlobalNavigation,
  getHotelInformation,
  getSplashScreen
} from '@/lib/api'

declare global {
  interface Window {
    // @ts-ignore: conflict with storyblok-client window type
    storyblok: any
  }
}

const loadStoryblokBridge = (cb: (_ev: Event) => any) => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${process.env.STORYBLOK_API_KEY}`
  script.onload = cb
  document.body.appendChild(script)
}

const getParam = (val: string) => {
  const pair = location.search
    .substr(1)
    .split('&')
    .map((part) => part.split('=').map(decodeURIComponent) as [string, string])
    .find(([k]) => k === val)

  return pair ? pair[1] : ''
}

export interface StoryblokStory {
  id: string
  content: any
  slug: string
  lang: string
}

export interface StoryblokEditorState {
  story: StoryblokStory | null
  configStory: any
  navStory: any
  lang: string
}

const APIS = {
  'hotel-configuration': getHotelConfiguration,
  home: getHomeData,
  'hotel-information': getHotelInformation,
  'de/hotel-information': getHotelInformation,
  layout: getHotelGlobalNavigation,
  'guest-service': getGuestService,
  'splash-screen': getSplashScreen
}

const getApiCall = async (path: string, language?: string) => {
  console.log(path)
  if (typeof path !== 'string') {
    return
  }
  if (!APIS[path]) {
    return
  }
  return APIS[path](true, language === 'default' ? '' : language)
}

class StoryblokEditor extends React.Component<{}, StoryblokEditorState> {
  constructor(props: {}) {
    super(props)
    this.state = { story: null, configStory: null, navStory: null, lang: 'default' }
  }

  componentDidMount() {
    loadStoryblokBridge(() => this.initStoryblokEvents())
  }

  loadStaticStory({ slug, key, language }: { slug: string; key: string; language?: string }) {
    getApiCall(slug, language).then((data) => {
      console.log({ data })
      if (!data) return
      if (data.content) {
        this.setState({ [key]: data } as any)
        return
      }
      this.setState({ [key]: { content: data } } as any)
    })
  }

  initStoryblokEvents() {
    const storyblok = window.storyblok || null
    if (!storyblok) {
      return
    }

    // get language from Storyblok query parameters
    this.setState({ lang: getParam('_storyblok_lang') })

    this.loadStaticStory({ slug: getParam('path'), key: 'story', language: this.state.lang })
    this.loadStaticStory({ slug: 'hotel-configuration', key: 'configStory', language: this.state.lang })
    this.loadStaticStory({ slug: 'layout', key: 'navStory', language: this.state.lang })

    // @ts-ignore: conflict with storyblok-client window type
    storyblok.on(['change', 'published'], (payload: { storyId: string; slug: string }) => {
      if (payload?.slug === 'layout') {
        this.loadStaticStory({ slug: 'layout', key: 'navStory', language: this.state.lang })
      } else {
        this.loadStaticStory({ slug: getParam('path'), key: 'story', language: this.state.lang })
      }
    })

    // @ts-ignore: conflict with storyblok-client window type
    storyblok.on('input', (payload: { story: StoryblokStory }) => {
      window.storyblok.addComments(payload.story.content, payload.story.id)
      if (this.state.navStory && payload.story?.slug === this.state.navStory.slug) {
        this.setState({ navStory: payload.story })
      }

      if (this.state.story && payload.story.id === this.state.story.id) {
        this.setState({ story: payload.story })
      }
    })

    storyblok.pingEditor(() => {
      if (storyblok.isInEditor) {
        storyblok.enterEditmode()
      }
    })
  }

  render() {
    if (!this.state.story) {
      return 'Component not found'
    }

    const { story, configStory, navStory } = this.state

    const renderComponent = (name) => {
      console.log({ name })
      switch (name) {
        case 'home':
          return <Home content={story?.content} blokConfig={configStory?.content} />
        case 'common_layout':
          return ''
        case 'hotel-information':
          return <HotelInformation blok={story?.content} blokConfig={configStory?.content} />
        case 'room-service':
          return <RoomService blok={story?.content} blokConfig={configStory?.content} />
        case 'guestService':
          return <GuestService blok={story?.content} blokConfig={configStory?.content} />
        case 'contact-detail':
          return <ContactDetail blok={story?.content} blokConfig={configStory?.content} />
        case 'order-success':
          return <OrderSuccess blok={story?.content} blokConfig={configStory?.content} />
        case 'order-confirmation':
          return <OrderConfirmation blok={story?.content} blokConfig={configStory?.content} />
        case 'splashScreen':
          return <SplashScreen blok={story?.content} blokConfig={configStory?.content} />
        default:
          return `Component ${name} not created yet`
      }
    }

    return (
      <Layout navLinks={navStory?.content.links} hotelConfig={configStory}>
        {renderComponent(story?.content?.component)}
      </Layout>
    )
  }
}

export default StoryblokEditor
