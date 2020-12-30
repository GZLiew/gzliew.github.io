export const resolveUrl = (url: string, anchor?: string) => {
  const resolvedUrl = url?.replace(/pwa/g, '') || ''
  if (anchor) {
    return `${resolvedUrl}#${anchor}`
  }
  return resolvedUrl
}
