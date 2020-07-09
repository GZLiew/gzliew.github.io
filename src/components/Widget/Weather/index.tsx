import React from "react"
import { WidgetContainer } from "../widget.styles"

interface Props {
  title?: string
}

const Weather = ({ title }) => {
  return (
    <WidgetContainer>
      <p>{title}</p>
    </WidgetContainer>
  )
}

export default Weather
