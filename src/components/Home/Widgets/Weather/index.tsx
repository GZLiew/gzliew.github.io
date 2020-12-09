import SbEditable from 'storyblok-react'
import { useTheme } from '@emotion/react'

import { WidgetContainer, Title, CityLabel, InfoContainer, WeatherInfo } from '../widget.styles'

import WeatherIcon from '@/assets/icons/WeatherIcon'

interface Props {
  blok: Blok
}

interface Blok {
  title?: string
  _editable: string
  _uid: string
  component: string
}

const Weather = ({ blok }: Props) => {
  const theme = useTheme()
  return (
    <SbEditable content={blok}>
      <WidgetContainer>
        <Title>{blok?.title}</Title>
        <InfoContainer>
          <WeatherIcon mode={theme.mode} />
          <WeatherInfo>
            <p>
              <span>24°C </span>
              Partly Cloudly
            </p>
            <CityLabel>Melbourne, Victoria</CityLabel>
          </WeatherInfo>
        </InfoContainer>
      </WidgetContainer>
    </SbEditable>
  )
}

export default Weather
