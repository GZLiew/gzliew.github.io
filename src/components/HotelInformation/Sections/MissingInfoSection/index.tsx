import { Richtext } from 'storyblok-js-client'

import RichTextSection from '@/components/RichTextSection'

interface Props {
  content: Richtext
}

const MissingInfoSection = ({ content }: Props) => (
  <RichTextSection title="Missing some information?" content={content} />
)

export default MissingInfoSection
