import { FunctionComponent } from "react"
import StoryblokClient, { Richtext } from "storyblok-js-client"

const Storyblok = new StoryblokClient({ accessToken: process.env.STORYBLOK_API_KEY })

interface Props {
  data: Richtext
  className?: string
}

const RichTextField: FunctionComponent<Props> = ({ data, ...props }) => {
  return <div {...props} dangerouslySetInnerHTML={{ __html: Storyblok.richTextResolver.render(data) }} />
}

export default RichTextField
