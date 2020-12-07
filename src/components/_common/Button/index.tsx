import { ReactNode } from "react"
import { ButtonStyled, ButtonWrapper } from "./Button.styles"

type ButtonWrapperProps = Omit<React.ComponentProps<typeof ButtonWrapper>, "variant">

interface Props {
  children?: ReactNode
  buttonClassName?: string
  onClick?: () => void
  props?: any
  bgColor?: string
  variant?: "flat"
  withIcon?: boolean
  size: "small" | "medium" | "large"
  outline?: boolean
  disabled?: boolean
  round?: boolean
}

const Button = ({
  buttonClassName,
  onClick,
  children,
  bgColor,
  variant,
  withIcon = false,
  outline,
  size = "small",
  disabled,
  round,
  ...props
}: Props & ButtonWrapperProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      variant={variant}
      bgColor={bgColor}
      withIcon={withIcon}
      outline={outline}
      size={size}
      disabled={disabled}
      round={round}
      {...props}>
      <ButtonStyled className={["group", buttonClassName].join(" ")}>{children}</ButtonStyled>
    </ButtonWrapper>
  )
}

export default Button
