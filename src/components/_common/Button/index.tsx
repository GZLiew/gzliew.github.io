import { ReactNode } from "react"
import { ButtonStyled, ButtonWrapper } from "./Button.styles"

type ButtonWrapperProps = Omit<React.ComponentProps<typeof ButtonWrapper>, "variant">

interface Props {
  children?: ReactNode
  className?: string
  onClick?: () => void
  props?: any
  bgColor?: string
  variant?: "flat"
  withIcon?: boolean
  size: "small" | "medium" | "large"
  outline?: boolean
  disabled?: boolean
}

const Button = ({
  className,
  onClick,
  children,
  bgColor,
  variant,
  withIcon = false,
  outline,
  size = "small",
  disabled,
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
      {...props}>
      <ButtonStyled className={["group", className].join(" ")}>{children}</ButtonStyled>
    </ButtonWrapper>
  )
}

export default Button
