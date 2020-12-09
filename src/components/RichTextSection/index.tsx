import { Richtext } from 'storyblok-js-client'
import Container from '@/components/Container'
import ReadMore from '@/components/_common/ReadMore'

import { SectionContent, Section, SectionTitle } from './RichTextSection.styles'

interface Props {
  title: string
  content?: Richtext
}

const RichTextSection: React.FC<Props> = ({ children, title, content }) => {
  return (
    <Section>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <ReadMore>{children || <SectionContent data={content} />}</ReadMore>
      </Container>
    </Section>
  )
}

export default RichTextSection
