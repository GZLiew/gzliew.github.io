import styled from '@emotion/styled'

export const Item = styled.div`
  position: relative;
  min-height: 63px;
  border-radius: 10px;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`
