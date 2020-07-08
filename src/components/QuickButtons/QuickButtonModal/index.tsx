import { FunctionComponent } from "react"
import Button from "@/components/Button"

import { ModalBg, ModalHeader, HelpText } from "./styles"

interface Props {
  closeModal: () => void
}

const QuickButtonModal: FunctionComponent<Props> = ({ closeModal, children }) => {
  return (
    <ModalBg>
      <ModalHeader>
        <Button onClick={closeModal} variant="white" maxWith="40px" height="40px">
          <img alt="Close Modal" src="icons/wt-ic-close.svg" />
        </Button>
        <HelpText>How can we help?</HelpText>
      </ModalHeader>
      {children}
    </ModalBg>
  )
}

export default QuickButtonModal
