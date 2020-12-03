export type Path = {
  params: Record<string, any>
}

type MergePaths = (...p: Path[][]) => Path[]

export const mergePaths: MergePaths = (...allPaths) => {
  if (allPaths.length === 1) {
    return allPaths[0]
  }
  const [first, second, ...restAllPaths] = allPaths
  const merged = first.map((p) => second.map((cp) => ({ params: { ...cp.params, ...p.params } }))).flat()

  return mergePaths(merged, ...restAllPaths)
}

/**
  [
   [{params: { lang: 'en' }}, {params: { lang: 'fr' }}, {params: { lang: 'de' }}],
   [{params: { category: 'beverages' }}, {params: { category: 'food' }}, {params: { category: 'meals' }}],
   [{params: { item: '12312dqwdqwd' }}, {params: { item: '12312dasdcasdcbqwdq' }}, {params: { item: '12d6678asdcasdcbqwdq' }}],
  ]
 */
