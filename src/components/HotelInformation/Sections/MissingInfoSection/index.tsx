import { Richtext } from "storyblok-js-client"

import RichTextSection from "../RichTextSection"

interface Props {
  content: Richtext
}

const MissingInfoSection = ({ content }: Props) => (
  <RichTextSection title="Missing some information?" content={content} />
)

export default MissingInfoSection
