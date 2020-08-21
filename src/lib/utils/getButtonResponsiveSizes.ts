const getButtonResponsiveSizes = () => {
  const sizes = [
    {
      breakpoint: {
        max: 320,
        min: 0
      },
      size: 44
    },
    {
      breakpoint: {
        max: 360,
        min: 321
      },
      size: 52
    },
    {
      breakpoint: {
        max: 375,
        min: 361
      },
      size: 56
    },
    {
      breakpoint: {
        max: 9999,
        min: 376
      },
      size: 60
    }
  ]

  return {
    sizeVar: `var(--size)`,
    responsiveQueries: sizes
      .map(
        ({ breakpoint, size }) =>
          `@media (min-width: ${breakpoint.min}px) and (max-width: ${breakpoint.max}px) {
            --size: ${size}px;
          }`
      )
      .join("")
  }
}

export default getButtonResponsiveSizes
