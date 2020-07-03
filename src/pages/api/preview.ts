export default async function preview(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.STORYBLOK_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: "Invalid token" })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const page = null

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: "Invalid slug" })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/` })
  res.end()
}
