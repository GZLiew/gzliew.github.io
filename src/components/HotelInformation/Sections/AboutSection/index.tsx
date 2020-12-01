import { Richtext } from "storyblok-js-client"
import ReadMore from "@/components/_common/ReadMore"

import RichTextSection from "../RichTextSection"
import { SectionContent } from "../RichTextSection/richTextSection.styles"

interface Props {
  content: Richtext
}

const AboutSection = ({ content }: Props) => {
  return (
    <RichTextSection title="About">
      <ReadMore>
        <SectionContent data={content} />
      </ReadMore>
    </RichTextSection>
  )
}

export default AboutSection
