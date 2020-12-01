import xw from "xwind"
import styled from "@emotion/styled"
import TouchableOpacity from "@/components/_common/TouchableOpacity"

export const Wrapper = styled(TouchableOpacity)`
  ${xw`flex flex-row font-bold text-lg`}
  ${xw`absolute transform -translate-x-1/2`}
  left: 50%;
  color: ${({ theme }) => (theme.mode === "dark" ? theme.colors.gray : xw`text-white`)};
`
