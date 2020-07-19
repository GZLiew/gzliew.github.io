import { FunctionComponent } from "react"
import Button from "@/components/Button"

import CloseIcon from "../../../assets/icons/wt-ic-close.svg"

import { ModalBg, ModalHeader, HelpText } from "./quickButtonModal.styles"

interface Props {
  closeModal: () => void
  divRef?: React.Ref<HTMLDivElement>
}

const QuickButtonModal: FunctionComponent<Props> = ({ closeModal, children, divRef }) => {
  return (
    <ModalBg ref={divRef}>
      <ModalHeader>
        <Button onClick={closeModal} bgColor="white" maxWith="40px" height="40px">
          <CloseIcon />
        </Button>
        <HelpText>How can we help?</HelpText>
      </ModalHeader>
      {children}
    </ModalBg>
  )
}

export default QuickButtonModal
