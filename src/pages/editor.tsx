import React from 'react'

import HotelInformation from '@/components/HotelInformation'
import RoomService from '@/components/RoomService'
import GuestService from '@/components/GuestService'
import ContactDetail from '@/components/ContactDetail'
import OrderSuccess from '@/components/OrderSuccess'
import OrderConfirmation from '@/components/OrderConfirmation'
import Home from '@/components/Home'
import Layout from '@/components/Layout'

import { getLocalizedSlugNode } from '@/lib/utils/getLocalizedSlug'

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

// retrofit getLocalizedSlugNode for this use case
const getLocalizedStoryId = (lang: string, storyId: string) => {
  if (lang === 'default') return getLocalizedSlugNode('/', storyId)
  return getLocalizedSlugNode(lang, storyId)
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

class StoryblokEditor extends React.Component<{}, StoryblokEditorState> {
  constructor(props: {}) {
    super(props)
    this.state = { story: null, configStory: null, navStory: null, lang: 'default' }
  }

  componentDidMount() {
    loadStoryblokBridge(() => this.initStoryblokEvents())
  }

  loadStory(payload: { storyId: string }) {
    // @ts-ignore: conflict with storyblok-client window type
    window.storyblok.get(
      {
        slug: payload.storyId,
        version: 'draft'
      },
      (data: { story: StoryblokStory }) => {
        this.setState({ story: data.story })
      }
    )
  }

  loadConfigStory(payload: { storyId: string }) {
    const localizedStoryId = getLocalizedStoryId(this.state.lang, payload.storyId)

    // @ts-ignore: conflict with storyblok-client window type
    window.storyblok.get(
      {
        slug: localizedStoryId,
        version: 'draft'
      },
      (data: { story: StoryblokStory }) => {
        this.setState({ configStory: data.story })
      }
    )
  }

  loadNavStory(payload: { storyId: string }) {
    const localizedStoryId = getLocalizedStoryId(this.state.lang, payload.storyId)

    // @ts-ignore: conflict with storyblok-client window type
    window.storyblok.get(
      {
        slug: localizedStoryId,
        version: 'draft'
      },
      (data: { story: StoryblokStory }) => {
        this.setState({ navStory: data.story })
      }
    )
  }

  initStoryblokEvents() {
    const storyblok = window.storyblok || null
    if (!storyblok) {
      return
    }

    // get language from Storyblok query parameters
    this.setState({ lang: getParam('_storyblok_lang') })

    this.loadStory({ storyId: getParam('path') })
    this.loadConfigStory({ storyId: 'hotel-configuration' })
    this.loadNavStory({ storyId: 'layout' })

    // @ts-ignore: conflict with storyblok-client window type
    storyblok.on(['change', 'published'], (payload: { storyId: string; slug: string }) => {
      if (payload?.slug === 'layout') {
        this.loadNavStory(payload)
      } else {
        this.loadStory(payload)
      }
    })

    // @ts-ignore: conflict with storyblok-client window type
    storyblok.on('input', (payload: { story: StoryblokStory }) => {
      if (this.state.navStory && payload.story?.slug === this.state.navStory.slug) {
        this.setState({ navStory: payload.story })
      }

      if (this.state.story && payload.story.id === this.state.story.id) {
        this.setState({ story: payload.story })
      }
    })

    storyblok.pingEditor(() => {
      // @ts-ignore: conflict with storyblok-client window type
      if (storyblok.inEditor) {
        storyblok.enterEditmode()
      }
    })
  }

  render() {
    if (!this.state.story) {
      return null
    }

    const { story, configStory, navStory } = this.state

    const renderComponent = (name) => {
      console.log({ name })
      switch (name) {
        case 'home':
          return <Home blok={story?.content} blokConfig={configStory?.content} />
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
        default:
          return `Component ${story?.content.component} not created yet`
      }
    }

    return (
      <Layout navLinks={navStory?.content.navigation} hotelConfig={configStory}>
        {renderComponent(story?.content.component)}
      </Layout>
    )
  }
}

export default StoryblokEditor
