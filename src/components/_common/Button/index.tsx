import { ReactNode } from "react"
import { ButtonBackground, ButtonStyled, ButtonWrapper, ContentContainer } from "./Button.styles"

type ButtonWrapperProps = React.ComponentProps<typeof ButtonWrapper>

interface Props {
  children?: ReactNode
  buttonClassName?: string
  onClick?: () => void
  props?: any
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
  raised = true,
  disabled,
  round,
  shouldAnimate,
  ...props
}: Props & ButtonWrapperProps) => {
  return (
    <ButtonWrapper
      role="button"
      onClick={onClick}
      variant={variant}
      bgColor={bgColor}
      withIcon={withIcon}
      outline={outline}
      size={size}
      raised={raised}
      disabled={disabled}
      round={round}
      shouldAnimate={shouldAnimate}
      {...props}>
      <ButtonStyled className={["group", buttonClassName].join(" ")}>
        <ContentContainer>{children}</ContentContainer>
      </ButtonStyled>
      <ButtonBackground />
    </ButtonWrapper>
  )
}

export default Button
