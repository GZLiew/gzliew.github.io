import styled from "@emotion/styled"
import tw from "@tailwindcssinjs/macro"

const Button = styled.button`
  ${tw`
  relative
  flex justify-center
  py-2 px-4
  border border-transparent
  text-sm leading-5 font-medium
  rounded-lg
  text-white
  bg-indigo-600
  hover:bg-indigo-500
  focus[outline-none border-indigo-700]
  active:bg-indigo-700
  transition duration-150 ease-in-out
`}
  max-width: 311px;
  box-shadow: -7px -5px 9px 0 #ffffff, 7px 5px 9px 0 #c7ced8;
  background: linear-gradient(101deg, #f95688 17%, #e1245e 77%);
`
export default Button
