import { FunctionComponent } from 'react'
import Button from '@/components/Button'

import CloseIcon from '@/assets/icons/CloseIcon'

import { ModalBg, ModalHeader, HelpText } from './quickButtonModal.styles'

interface Props {
  closeModal: () => void
  divRef?: React.Ref<HTMLDivElement>
}

const QuickButtonModal: FunctionComponent<Props> = ({ closeModal, children, divRef }) => {
  return (
    <ModalBg ref={divRef}>
      <ModalHeader>
        <Button onClick={closeModal} bgColor="white">
          <CloseIcon />
        </Button>
        <HelpText>How can we help?</HelpText>
      </ModalHeader>
      {children}
    </ModalBg>
  )
}

export default QuickButtonModal
