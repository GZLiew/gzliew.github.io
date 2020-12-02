import React from "react"

import { HotelConfigContent } from "@/lib/types/hotelConfig"
import { HotelInfoContent } from "@/lib/types/hotelInfo"

import PageLayout from "@/components/_common/PageLayout"
import HeaderTitle from "@/components/_common/HeaderTitle"
import Section from "@/components/_common/Section"
import { StyledTextInput } from "./ContactDetail.styles"
import { StyledButton } from "./ContactDetail.styles"

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
  preview?: boolean
}

const DEFAULT_LABEL = "Contact Details"

const ContactDetail = ({ blok, blokConfig, preview }: Props) => {
  return (
    <PageLayout preview={preview} blokConfig={blokConfig} title={() => <HeaderTitle label={DEFAULT_LABEL} />}>
      <Section style={{ padding: "26px" }}>
        <StyledTextInput placeholder="Enter Name" />
        <StyledTextInput placeholder="Enter Room Number" />
        <StyledButton size="large">Place Order</StyledButton>
      </Section>
    </PageLayout>
  )
}

export default ContactDetail
