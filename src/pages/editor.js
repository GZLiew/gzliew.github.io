import Home from "@/components/Home"
import Layout from "@/components/Layout"

const loadStoryblokBridge = (cb) => {
  let script = document.createElement("script")
  script.type = "text/javascript"
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=R16urrjJCcUMKdk85FBwsgtt`
  script.onload = cb
  document.getElementsByTagName("head")[0].appendChild(script)
}

const getParam = function (val) {
  var result = ""
  var tmp = []

  window.location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=")
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1])
      }
    })

  return result
}

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = { story: null, configStory: null, navStory: null }
  }

  componentDidMount() {
    loadStoryblokBridge(() => {
      this.initStoryblokEvents()
    })
  }

  loadStory(payload) {
    window.storyblok.get(
      {
        slug: payload.storyId,
        version: "draft"
      },
      (data) => {
        this.setState({ story: data.story })
      }
    )
  }

  loadConfigStory(payload) {
    window.storyblok.get(
      {
        slug: payload.storyId,
        version: "draft"
      },
      (data) => {
        this.setState({ configStory: data.story })
      }
    )
  }

  loadNavStory(payload) {
    window.storyblok.get(
      {
        slug: payload.storyId,
        version: "draft"
      },
      (data) => {
        this.setState({ navStory: data.story })
      }
    )
  }

  initStoryblokEvents() {
    this.loadStory({ storyId: getParam("path") })
    this.loadConfigStory({ storyId: "hotel-configuration" })
    this.loadNavStory({ storyId: "layout" })

    let sb = window.storyblok

    sb.on(["change", "published"], (payload) => {
      if (payload?.slug === "layout") {
        this.loadNavStory(payload)
      } else {
        this.loadStory(payload)
      }
    })

    sb.on("input", (payload) => {
      if (this.state.navStory && payload.story?.slug === this.state.navStory.slug) {
        payload.story.content = sb.addComments(payload.story.content, payload.story.id)
        this.setState({ navStory: payload.story })
      }

      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(payload.story.content, payload.story.id)
        this.setState({ story: payload.story })
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  render() {
    if (this.state.story == null) {
      return <div />
    }

    let content = this.state.story.content
    let hotelSettings = this.state.configStory
    let sidebarLinks = this.state.navStory

    return (
      <Layout navLinks={sidebarLinks?.content.navigation} hotelConfig={hotelSettings}>
        {content.component === "home" ? (
          <Home blok={content} blokConfig={hotelSettings?.content} />
        ) : content.component === "common_layout" ? (
          ``
        ) : (
          `Component ${content.component} not created yet`
        )}
      </Layout>
    )
  }
}

export default StoryblokEntry
