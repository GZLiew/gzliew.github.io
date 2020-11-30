import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"
import TouchableOpacity from "@/components/_common/TouchableOpacity"

export const Wrapper = styled(TouchableOpacity)`
  ${tw`flex flex-row font-bold text-lg`}
  ${tw`absolute transform -translate-x-1/2`}
  left: 50%;
  color: ${({ theme }) => (theme.mode === "dark" ? theme.colors.gray : tw`text-white`)};
`
