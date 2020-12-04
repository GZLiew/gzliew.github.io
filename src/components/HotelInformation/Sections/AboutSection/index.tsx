import { Richtext } from "storyblok-js-client"

import RichTextSection from "@/components/RichTextSection"

interface Props {
  content: Richtext
}

const AboutSection = ({ content }: Props) => {
  return <RichTextSection title="About" content={content} />
}

export default AboutSection
