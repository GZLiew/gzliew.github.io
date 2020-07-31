import { Richtext } from "storyblok-js-client"

import RichTextSection from "../RichTextSection"

interface Props {
  content: Richtext
}

const ReviewSection = ({ content }: Props) => <RichTextSection title="Review" content={content} />

export default ReviewSection
