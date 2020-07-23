import Container from "@/components/Container"
import { SectionTitle, SectionContent } from "./aboutSection.styles"

import { Richtext } from "storyblok-js-client"
import { Section } from "../Section"

interface Props {
  content: Richtext
}

export const AboutSection = ({ content }: Props) => {
  return (
    <Section>
      <Container>
        <SectionTitle>About</SectionTitle>
        <SectionContent data={content} />
      </Container>
    </Section>
  )
}
