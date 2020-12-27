import React from 'react'
import { Input } from './TextInput.styles'

type Props = React.ComponentProps<typeof Input>

const TextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <Input type="text" {...props} ref={ref} />
})

export default TextInput
