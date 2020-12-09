import { ReactNode } from 'react'
import { ButtonStyled, ButtonWrapper } from './button.styles'
import { useTheme } from '@emotion/react'
import { PrimaryColor } from '@/lib/types/hotelConfig'

interface Props {
  children?: ReactNode
  className?: string
  onClick?: () => void
  bgColor?: PrimaryColor | 'white'
  maxWidth?: string
  height?: string
  variant?: 'flat' | 'withShadow'
  withIcon?: boolean
}

const Button = ({
  className,
  onClick,
  children,
  bgColor,
  maxWidth,
  height,
  variant = 'withShadow',
  withIcon = false
}: Props) => {
  const theme = useTheme()
  return (
    <ButtonWrapper
      onClick={onClick}
      variant={variant}
      bgColor={bgColor || theme?.brandColors.primary}
      maxWidth={maxWidth}
      height={height}
      withIcon={withIcon}>
      <ButtonStyled className={['group', className].join(' ')}>{children}</ButtonStyled>
    </ButtonWrapper>
  )
}

export default Button
