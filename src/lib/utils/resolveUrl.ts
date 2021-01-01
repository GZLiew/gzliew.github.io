export const resolveUrl = (url: string, anchor?: string, withBackSlash = true) => {
  let resolvedUrl: string
  if (withBackSlash) {
    resolvedUrl = url?.replace(/pwa/g, '') || ''
  } else {
    resolvedUrl = url?.replace(/pwa|\//g, '') || ''
  }

  if (anchor) {
    return `${resolvedUrl}#${anchor}`
  }
  if (!resolvedUrl) {
    return '/'
  }
  return resolvedUrl
}
