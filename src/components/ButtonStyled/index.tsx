import React, { ReactNode } from "react"
import Button from "./styles"

interface Props {
  children?: ReactNode
  className?: string
  onClick: () => void
  props?: any
}

const ButtonStyled = ({ className, children, ...props }: Props) => (
  <Button {...props} className={["group", className].join(" ")}>
    {children}
  </Button>
)

export default ButtonStyled
