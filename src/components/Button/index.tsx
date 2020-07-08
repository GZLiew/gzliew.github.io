import { ReactNode } from "react"
import { ButtonStyled, ButtonWrapper } from "./styles"

interface Props {
  children?: ReactNode
  className?: string
  onClick?: () => void
  props?: any
  variant?: string
  maxWith?: string
  height?: string
}

const Button = ({
  className,
  children,
  onClick,
  variant = "pink",
  maxWith = "100%",
  height = "70px",
  ...props
}: Props) => (
  <ButtonWrapper onClick={onClick} variant={variant} maxWith={maxWith} height={height}>
    <ButtonStyled className={["group", className].join(" ")}>{children}</ButtonStyled>
  </ButtonWrapper>
)

export default Button
