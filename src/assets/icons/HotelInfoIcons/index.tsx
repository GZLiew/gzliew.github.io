/** @jsx jsx */

import BreakfastIcon from "./breakfast-icon.svg"
import CheckInTimeIcon from "./check-in-time-icon.svg"
import ConferenceRoomIcon from "./conference-room-icon.svg"
import ElevatorIcon from "./elevator-icon.svg"
import EmergencyIcon from "./emergency-icon.svg"
import GymIcon from "./gym-icon.svg"
import ParkingIcon from "./parking-icon.svg"
import ReceptionIcon from "./reception-icon.svg"
import SwimmingIcon from "./swimming-icon.svg"
import WifiIcon from "./wifi-icon.svg"
import { Theme, css, jsx } from "@emotion/react"

const iconColorStyles = (theme: Theme) => css`
  color: ${theme.colors.icon};
`

export default {
  breakfast: <BreakfastIcon css={iconColorStyles} />,
  checkInTime: <CheckInTimeIcon css={iconColorStyles} />,
  conferenceRoom: <ConferenceRoomIcon css={iconColorStyles} />,
  elevator: <ElevatorIcon css={iconColorStyles} />,
  emergency: <EmergencyIcon css={iconColorStyles} />,
  gym: <GymIcon css={iconColorStyles} />,
  parking: <ParkingIcon css={iconColorStyles} />,
  reception: <ReceptionIcon css={iconColorStyles} />,
  swimming: <SwimmingIcon css={iconColorStyles} />,
  wifi: <WifiIcon css={iconColorStyles} />
}
