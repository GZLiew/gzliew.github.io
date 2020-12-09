import SbEditable from 'storyblok-react'

import { QuickButtonWrapper, QuickButtonItem, Title } from './quickButtonItem.styles'

import BaseLink from '@/components/BaseLink'

import QuickIcons from '@/assets/icons/QuickIcons'

import { IQuickButton } from '@/lib/types/homeContent'

interface Props {
  item: IQuickButton
}

const QuickButton = ({ item }: Props) => {
  return (
    <SbEditable content={item}>
      <BaseLink storyblokLink={item?.link}>
        <QuickButtonWrapper>
          <QuickButtonItem bg={item?.backgroundColor}>{QuickIcons[item?.iconName]}</QuickButtonItem>
          <Title>{item?.text}</Title>
        </QuickButtonWrapper>
      </BaseLink>
    </SbEditable>
  )
}

export default QuickButton
