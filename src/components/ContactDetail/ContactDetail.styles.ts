import xw from 'xwind'
import styled from '@emotion/styled'
import TextInput from '@/components/_common/TextInput'
import Button from '@/components/_common/Button'
import Section from '@/components/_common/Section'

export const StyledSection = styled(Section)`
  ${xw`p-6`}
  height: 100vh;
`
export const StyledTextInput = styled(TextInput)`
  ${xw`mt-4`}
`
export const StyledButton = styled(Button)`
  ${xw`mt-9 `}
`
