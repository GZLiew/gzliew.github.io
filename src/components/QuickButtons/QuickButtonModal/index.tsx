import React from "react"

import Button from "@/components/Button"

import { ModalBg, ModalHeader, HelpText } from "./styles"

const QuickButtonModal = ({ isActive, closeModal }: { isActive: boolean; closeModal: () => void }) => {
  return (
    <ModalBg>
      <ModalHeader>
        <Button onClick={closeModal} variant="white" maxWith="40px" height="40px">
          <img alt="Close Modal" src="icons/wt-ic-close.svg" />
        </Button>
        <HelpText>How can we help?</HelpText>
      </ModalHeader>
    </ModalBg>
  )
}

export default QuickButtonModal
