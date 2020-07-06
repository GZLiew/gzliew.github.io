import React, { ReactNode } from "react"
import { ButtonStyled, ButtonWrapper } from "./styles"
import colors from "@/lib/theme/colors"

interface Props {
  children?: ReactNode
  className?: string
  onClick: () => void
  props?: any
  variant?: string
}

const Button = ({ className, children, variant = "pink", ...props }: Props) => (
  <ButtonWrapper>
    <ButtonStyled variant={variant} className={["group", className].join(" ")}>
      {children}
    </ButtonStyled>
  </ButtonWrapper>
)

export default Button
