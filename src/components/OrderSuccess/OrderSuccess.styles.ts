import xw from 'xwind'
import styled from '@emotion/styled'
import Container from '@/components/Container'
import Section from '@/components/_common/Section'

export const StyledSection = styled(Section)`
  ${xw`p-6`}
  height: 100vh;
`

export const StyledContainer = styled(Container)`
  ${xw`p-7 mb-16 text-center rounded-3xl flex block justify-center`}
  background-color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.secondary : theme.colors.primary};
`

export const CheckWrapper = styled.div`
  ${xw`relative mx-auto mt-16 mb-6 p-2 w-20 rounded-3xl flex justify-center items-center`}
  border: 1px solid ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.primary : theme.colors.secondary};
`

export const CheckWrapperInner = styled.div`
  ${xw`p-7 rounded-3xl w-16`}
  background-color: #75A346;
`

export const SuccessMessage = styled.div`
  ${xw`px-11 pb-11`}
`

export const Wrapper = styled.div`
  ${xw`text-center`}
`

export const Note = styled.div`
  ${xw`px-14 pb-12`}
  color: ${({ theme }) => theme.colors.text.alternate};
`

export const ThinText = styled.div`
  ${xw`text-sm font-light`}
`

export const BoldText = styled.div`
  ${xw`text-sm font-light`}
  ${({ theme }) => (theme.mode === 'light' ? xw`text-black` : xw`text-white`)}
`
