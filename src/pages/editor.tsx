import React from "react"
import Home from "@/components/Home"
import Layout from "@/components/Layout"

declare global {
  interface Window {
    storyblok: any
  }
}

const loadStoryblokBridge = (cb: (ev: Event) => any) => {
  const script = document.createElement("script")
  script.type = "text/javascript"
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${process.env.STORYBLOK_API_KEY}`
  script.onload = cb
  document.body.appendChild(script)
}

const getParam = (val: string) => {
  const pair = location.search
    .substr(1)
    .split("&")
    .map((part) => part.split("=").map(decodeURIComponent) as [string, string])
    .find(([k]) => k === val)

  return pair ? pair[1] : ""
}

export interface StoryblokStory {
  id: string
  content: any
  slug: string
}

export interface StoryblokEditorState {
  story: StoryblokStory | null
  configStory: any
  navStory: any
}

class StoryblokEditor extends React.Component<{}, StoryblokEditorState> {
  constructor(props: {}) {
    super(props)
    this.state = { story: null, configStory: null, navStory: null }
  }

  componentDidMount() {
    loadStoryblokBridge(() => this.initStoryblokEvents())
  }

  loadStory(payload: { storyId: string }) {
    window.storyblok.get(
      {
        slug: payload.storyId,
        version: "draft"
      },
      (data: { story: StoryblokStory }) => {
        this.setState({ story: data.story })
      }
    )
  }

  loadConfigStory(payload: { storyId: string }) {
    window.storyblok.get(
      {
        slug: payload.storyId,
        version: "draft"
      },
      (data: { story: StoryblokStory }) => {
        this.setState({ configStory: data.story })
      }
    )
  }

  loadNavStory(payload: { storyId: string }) {
    window.storyblok.get(
      {
        slug: payload.storyId,
        version: "draft"
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

    this.loadStory({ storyId: getParam("_storyblok") })
    this.loadConfigStory({ storyId: "hotel-configuration" })
    this.loadNavStory({ storyId: "layout" })

    storyblok.on(["change", "published"], (payload: { storyId: string; slug: string }) => {
      if (payload?.slug === "layout") {
        this.loadNavStory(payload)
      } else {
        this.loadStory(payload)
      }
    })

    storyblok.on("input", (payload: { story: StoryblokStory }) => {
      if (this.state.navStory && payload.story?.slug === this.state.navStory.slug) {
        this.setState({ navStory: payload.story })
      }

      if (this.state.story && payload.story.id === this.state.story.id) {
        this.setState({ story: payload.story })
      }
    })

    storyblok.pingEditor(() => {
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
      switch (name) {
        case "home":
          return <Home blok={story?.content} blokConfig={configStory?.content} />
        case "common_layout":
          return ""
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
