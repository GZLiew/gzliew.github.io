import { useRef } from 'react'
import QuickButton from './Quickbutton'
import QuickButtonModal from './QuickButtonModal'
import { QuickButtonWrapper, QuickButtonItem, Title } from './Quickbutton/quickButtonItem.styles'

import ShowMoreIcon from '../../../assets/icons/ic-my-orders.svg'

import { QuickButtonsLayout } from './quickButtons.styles'

import useToggle from '@/lib/hooks/useToggle'
import useLockBodyScroll from '@/lib/hooks/useLockBodyScroll'

import { IQuickButton } from '@/lib/types/homeContent'
import getLocalizedSlug from '@/lib/utils/getLocalizedSlug'

interface Props {
  buttons?: IQuickButton[]
}

const QuickButtons = ({ buttons }: Props) => {
  const localizedButtons = buttons.map(({ link, ...btn }) => ({
    link: { ...link, cachedUrl: getLocalizedSlug(link.cached_url), url: getLocalizedSlug(link.url) },
    ...btn
  }))
  if (buttons?.length === 0) return null

  const [isActive, toggle] = useToggle(false)
  const modalRef = useRef(null)

  useLockBodyScroll(isActive, modalRef)

  return (
    <>
      <QuickButtonsLayout>
        {!isActive &&
          localizedButtons?.slice(0, 7)?.map((item) => <QuickButton item={item} key={item?._uid} />)}

        <QuickButtonWrapper>
          <QuickButtonItem onClick={toggle}>
            <ShowMoreIcon />
          </QuickButtonItem>
          <Title>More</Title>
        </QuickButtonWrapper>
      </QuickButtonsLayout>
      {isActive && (
        <QuickButtonModal divRef={modalRef} closeModal={toggle}>
          <QuickButtonsLayout>
            {localizedButtons?.map((item) => (
              <QuickButton item={item} key={item?._uid} />
            ))}
          </QuickButtonsLayout>
        </QuickButtonModal>
      )}
    </>
  )
}

export default QuickButtons
