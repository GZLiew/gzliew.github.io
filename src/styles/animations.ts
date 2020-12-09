import { keyframes } from '@emotion/react'

export const slideUp = keyframes`
   0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`
export const slideDown = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translateY(100%);
  }
`
