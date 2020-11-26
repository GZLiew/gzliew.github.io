import React from "react"
import { Input } from "./TextInput.styles"

type Props = React.ComponentProps<typeof Input>

const TextInput = (props: Props) => {
  return <Input type="text" {...props} />
}

export default TextInput
