import React from "react"
import { WidgetContainer, Title, CityLabel, InfoContainer, WeatherInfo } from "../widget.styles"

import WeatherIcon from "@/assets/icons/WeatherIcon"

interface Props {
  title?: string
  variant?: string
}

const Weather = ({ title, variant }: Props) => {
  return (
    <WidgetContainer>
      <Title>{title}</Title>
      <InfoContainer>
        <WeatherIcon theme={variant} />
        <WeatherInfo>
          <p>
            <span>24°C </span>
            Partly Cloudly
          </p>
          <CityLabel>Melbourne, Victoria</CityLabel>
        </WeatherInfo>
      </InfoContainer>
    </WidgetContainer>
  )
}

export default Weather
