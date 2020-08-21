import { SectionContent, Section, SectionTitle } from "./richTextSection.styles"
import Container from "@/components/Container"

import { Richtext } from "storyblok-js-client"

interface Props {
  title: string
  content?: Richtext
}

const RichTextSection: React.FC<Props> = ({ children, title, content }) => {
  return (
    <Section>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        {children || <SectionContent data={content} />}
      </Container>
    </Section>
  )
}

export default RichTextSection
