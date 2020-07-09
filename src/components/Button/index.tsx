import { ReactNode } from "react"
import { ButtonStyled, ButtonWrapper } from "./button.styles"

type BgColor = "pink" | "red" | "blue" | "green" | "purple" | "yellow" | "brown" | "black" | "white"

interface Props {
  children?: ReactNode
  className?: string
  onClick?: () => void
  props?: any
  bgColor?: BgColor
  maxWith?: string
  height?: string
  variant?: "flat" | "withShadow"
  withIcon?: boolean
}

const Button = ({
  className,
  onClick,
  children,
  bgColor = "pink",
  maxWith = "100%",
  height = "70px",
  variant = "withShadow",
  withIcon = false,
  ...props
}: Props) => (
  <ButtonWrapper
    onClick={onClick}
    variant={variant}
    bgColor={bgColor}
    maxWith={maxWith}
    height={height}
    withIcon={withIcon}>
    <ButtonStyled className={["group", className].join(" ")}>{children}</ButtonStyled>
  </ButtonWrapper>
)

export default Button
