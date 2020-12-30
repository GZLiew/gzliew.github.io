import React from 'react'

import { ILayoutNavigationLink } from '@/lib/types/commonLayout'

import Tab from './Tab'
import { BottomTabsContainer } from './BottomTabs.styles'
import { HOME_LINK, NAVIGATION_LINK } from '@/lib/constants'

type BottomTabsContainerProps = React.ComponentProps<typeof BottomTabsContainer>

type Props = {
  tabs: ILayoutNavigationLink[]
}

const BottomTabs = ({ tabs, ...bottomTabsContainer }: BottomTabsContainerProps & Props) => {
  return (
    <BottomTabsContainer {...bottomTabsContainer}>
      <Tab key={HOME_LINK._uid} item={HOME_LINK} />
      {tabs.slice(0, 2).map((tab) => (
        <Tab key={tab._uid} item={tab} />
      ))}
      <Tab key={NAVIGATION_LINK._uid} item={NAVIGATION_LINK} />
    </BottomTabsContainer>
  )
}

export default BottomTabs
