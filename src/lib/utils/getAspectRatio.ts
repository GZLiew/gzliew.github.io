const getAspectRatio = (width?: number, height?: number) => {
  if (!width || !height) return `${100 / (1 / 1)}vw` // square ratio
  if (width > height) return `${100 / (3 / 2)}vw` // landscape ratio
  if (width < height) return `100vh` // portrait ratio
  return `${100 / (1 / 1)}vw` // square ratio
}

export default getAspectRatio
