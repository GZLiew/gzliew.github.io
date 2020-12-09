import { mergePaths } from './'

describe('mergePaths', () => {
  it('should return first item if length of arguments is 1', () => {
    const input = [[{ params: { lang: 'en' } }, { params: { lang: 'fr' } }, { params: { lang: 'de' } }]]
    const output = mergePaths(...input)
    expect(output).toEqual(input[0])
  })

  it('should return combination of paths for 2 inputs', () => {
    const inputs = [
      [{ params: { lang: 'en' } }, { params: { lang: 'fr' } }, { params: { lang: 'de' } }],
      [
        { params: { category: 'beverages' } },
        { params: { category: 'food' } },
        { params: { category: 'meals' } }
      ]
    ]
    const expectedOutput = [
      { params: { category: 'beverages', lang: 'en' } },
      { params: { category: 'food', lang: 'en' } },
      { params: { category: 'meals', lang: 'en' } },
      { params: { category: 'beverages', lang: 'fr' } },
      { params: { category: 'food', lang: 'fr' } },
      { params: { category: 'meals', lang: 'fr' } },
      { params: { category: 'beverages', lang: 'de' } },
      { params: { category: 'food', lang: 'de' } },
      { params: { category: 'meals', lang: 'de' } }
    ]

    const output = mergePaths(...inputs)

    expect(output).toEqual(expectedOutput)
  })

  it('should return combination of paths for 2 or more inputs', () => {
    const inputs = [
      [{ params: { lang: 'en' } }, { params: { lang: 'fr' } }, { params: { lang: 'de' } }],
      [
        { params: { category: 'beverages' } },
        { params: { category: 'food' } },
        { params: { category: 'meals' } }
      ],
      [
        { params: { item: '12312dqwdqwd' } },
        { params: { item: '12312dasdcasdcbqwdq' } },
        { params: { item: '12d6678asdcasdcbqwdq' } }
      ]
    ]

    const expectedOutput = [
      {
        params: { item: '12312dqwdqwd', category: 'beverages', lang: 'en' }
      },
      {
        params: { item: '12312dasdcasdcbqwdq', category: 'beverages', lang: 'en' }
      },
      {
        params: { item: '12d6678asdcasdcbqwdq', category: 'beverages', lang: 'en' }
      },
      { params: { item: '12312dqwdqwd', category: 'food', lang: 'en' } },
      {
        params: { item: '12312dasdcasdcbqwdq', category: 'food', lang: 'en' }
      },
      {
        params: { item: '12d6678asdcasdcbqwdq', category: 'food', lang: 'en' }
      },
      { params: { item: '12312dqwdqwd', category: 'meals', lang: 'en' } },
      {
        params: { item: '12312dasdcasdcbqwdq', category: 'meals', lang: 'en' }
      },
      {
        params: { item: '12d6678asdcasdcbqwdq', category: 'meals', lang: 'en' }
      },
      {
        params: { item: '12312dqwdqwd', category: 'beverages', lang: 'fr' }
      },
      {
        params: { item: '12312dasdcasdcbqwdq', category: 'beverages', lang: 'fr' }
      },
      {
        params: { item: '12d6678asdcasdcbqwdq', category: 'beverages', lang: 'fr' }
      },
      { params: { item: '12312dqwdqwd', category: 'food', lang: 'fr' } },
      {
        params: { item: '12312dasdcasdcbqwdq', category: 'food', lang: 'fr' }
      },
      {
        params: { item: '12d6678asdcasdcbqwdq', category: 'food', lang: 'fr' }
      },
      { params: { item: '12312dqwdqwd', category: 'meals', lang: 'fr' } },
      {
        params: { item: '12312dasdcasdcbqwdq', category: 'meals', lang: 'fr' }
      },
      {
        params: { item: '12d6678asdcasdcbqwdq', category: 'meals', lang: 'fr' }
      },
      {
        params: { item: '12312dqwdqwd', category: 'beverages', lang: 'de' }
      },
      {
        params: { item: '12312dasdcasdcbqwdq', category: 'beverages', lang: 'de' }
      },
      {
        params: { item: '12d6678asdcasdcbqwdq', category: 'beverages', lang: 'de' }
      },
      { params: { item: '12312dqwdqwd', category: 'food', lang: 'de' } },
      {
        params: { item: '12312dasdcasdcbqwdq', category: 'food', lang: 'de' }
      },
      {
        params: { item: '12d6678asdcasdcbqwdq', category: 'food', lang: 'de' }
      },
      { params: { item: '12312dqwdqwd', category: 'meals', lang: 'de' } },
      {
        params: { item: '12312dasdcasdcbqwdq', category: 'meals', lang: 'de' }
      },
      {
        params: { item: '12d6678asdcasdcbqwdq', category: 'meals', lang: 'de' }
      }
    ]

    const output = mergePaths(...inputs)
    expect(output).toEqual(expectedOutput)
  })
})
