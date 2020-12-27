import React from 'react'
import { TextAreaStyled } from './TextArea.styles'

type Props = React.ComponentProps<typeof TextAreaStyled>

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  return <TextAreaStyled {...props} ref={ref} />
})

export default TextArea
