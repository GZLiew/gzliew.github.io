import xw from 'xwind'
import { ReactNode } from 'react'
import styled from '@emotion/styled'
import QuantitySelector from '@/components/_common/QuantitySelector'
import Container from '@/components/Container'

type ImageProps = {
  backgroundImage: string
}

export const ContainerStyled = styled(Container)`
  ${xw`px-8`}
`

export const AboutWrapper = styled.div`
  ${xw`text-gray-600 text-sm py-8`}
`

export const MenuWrapper = styled.div<{ children: ReactNode }>`
  ${xw`py-4 text-sm`}
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.menuBackground};
`

export const StickyFooterWrapper = styled.div`
  ${xw`sticky z-10 bottom-0 py-4 px-8 w-full flex flex-row justify-between items-center`}
  background: ${({ theme }) => theme.colors.footer.background};
  box-shadow: ${({ theme }) => theme.colors.footer.boxShadow};
  color: ${({ theme }) => theme.colors.text.alternate};
`

export const StyledTitle = styled.h1`
  ${xw`text-2xl pb-2 font-bold`}
  color: ${({ theme }) => theme.colors.text.primary};
`

export const Image = styled.div<ImageProps>`
  ${xw`w-full h-44 my-3 rounded-2xl`}
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const QuantityWrapper = styled.div`
  ${xw`text-white text-base text-center flex flex-col justify-center items-center py-8`}
  color: ${({ theme }) => theme.colors.text.alternate};
`

export const QuantitySelectorStyled = styled(QuantitySelector)`
  ${xw`my-4`}
`
