export async function fetchAPI(query, { variables, preview }: { variables?: any; preview?: boolean } = {}) {
  const res = await fetch('https://gapi.storyblok.com/v1/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Token: process.env.STORYBLOK_API_KEY,
      Version: preview ? 'draft' : 'published'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}
