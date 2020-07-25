import { Richtext } from "storyblok-js-client"

import Container from "@/components/Container"

import { Section, SectionTitle, SectionContent } from "./aboutSection.styles"

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
