import React from "react"
import { TextAreaStyled } from "./TextArea.styles"

type Props = React.ComponentProps<typeof TextAreaStyled>

const TextArea = (props: Props) => {
  return <TextAreaStyled {...props} />
}

export default TextArea
