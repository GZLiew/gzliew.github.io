import { IMenu, IMenuSubsection } from '@/lib/types/roomService'

const options = [
  {
    _uid: 'honey-chilli-potato',
    label: 'Honey Chilli Potato'
  },
  {
    _uid: 'exotic-veg-thai-style',
    label: 'Exotic Veg Thai Style',
    secondaryLabel: '+ $ 29'
  },
  {
    _uid: 'mushroom-&-babycorn-schezwan',
    label: 'Mushroom & Babycorn Schezwan',
    secondaryLabel: '+ $ 29'
  }
]

const choices = [
  {
    _uid: 'choice-of-veg-starter',
    component: '',
    type: 'radio',
    title: 'Choice of Veg Starter',
    secondaryTitle: 'Required',
    options
  },
  {
    _uid: 'steamed-or-grilled',
    component: '',
    type: 'radio',
    title: 'Steamed or Grilled',
    secondaryTitle: 'Required',
    options
  },
  {
    _uid: 'slice-of-lemon',
    component: '',
    type: 'toggle',
    title: 'Would you like it with a slice of lemon?',
    secondaryTitle: 'Optional',
    options: [
      { id: 'yes', label: 'Yes' },
      { id: 'no', label: 'No' }
    ]
  },
  {
    _uid: 'bottle330',
    component: '',
    type: 'quantity',
    title: 'Bottle (330ml)',
    secondaryTitle: '$29',
    options: []
  }
]

const subSection = {
  image: { name: 'image', filename: 'https://picsum.photos/200' },
  title: 'Supreme Paneer Burger',
  description: {
    content: [
      {
        type: 'paragraph',
        content: [
          {
            text:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia harum odit, rem dolorum culpan quibusdam.',
            type: 'text'
          }
        ]
      }
    ]
  },
  choices,
  price: 25
} as any

export const dataFood: IMenu[] = [
  {
    _uid: 'somerandomuid1',
    title: 'Breakfast',
    description: 'hello',
    slug: 'breakfast',
    component: '',
    subsections: [
      {
        _uid: 'food0',
        component: '',
        ...subSection
      },
      {
        _uid: 'food1',
        component: '',
        ...subSection
      },
      {
        _uid: 'food2',
        component: '',
        ...subSection
      },
      {
        _uid: 'food3',
        component: '',
        ...subSection
      },
      {
        _uid: 'food4',
        component: '',
        ...subSection
      },
      {
        _uid: 'food5',
        component: '',
        ...subSection
      }
    ]
  },
  {
    _uid: 'somerandomuid2',
    title: 'All day Dining',
    description: 'hello',
    slug: 'all-day-dining',
    component: '',
    subsections: [
      {
        _uid: 'food6',
        component: '',
        ...subSection
      },
      {
        _uid: 'food7',
        component: '',
        ...subSection
      },
      {
        _uid: 'food8',
        component: '',
        ...subSection
      },
      {
        _uid: 'food9',
        component: '',
        ...subSection
      },
      {
        _uid: 'food10',
        component: '',
        ...subSection
      },
      {
        _uid: 'food11',
        component: '',
        ...subSection
      },
      {
        _uid: 'food12',
        component: '',
        ...subSection
      },
      {
        _uid: 'food13',
        component: '',
        ...subSection
      }
    ]
  },
  {
    _uid: 'somerandomuid3',
    title: 'Late night Dining',
    description: 'hello',
    slug: 'late-night-dining',
    component: '',
    subsections: [
      {
        _uid: 'food14',
        component: '',
        ...subSection
      },
      {
        _uid: 'food15',
        component: '',
        ...subSection
      },
      {
        _uid: 'food16',
        component: '',
        ...subSection
      },
      {
        _uid: 'food17',
        component: '',
        ...subSection
      },
      {
        _uid: 'food18',
        component: '',
        ...subSection
      },
      {
        _uid: 'food19',
        component: '',
        ...subSection
      },
      {
        _uid: 'food20',
        component: '',
        ...subSection
      },
      {
        _uid: 'food21',
        component: '',
        ...subSection
      }
    ]
  },
  {
    _uid: 'somerandomuid4',
    title: 'Guest Directory',
    description: 'hello',
    slug: 'guest-directory',
    component: '',
    subsections: [
      {
        _uid: 'food22',
        component: '',
        ...subSection
      },
      {
        _uid: 'food23',
        component: '',
        ...subSection
      },
      {
        _uid: 'food24',
        component: '',
        ...subSection
      },
      {
        _uid: 'food25',
        component: '',
        ...subSection
      },
      {
        _uid: 'food26',
        component: '',
        ...subSection
      },
      {
        _uid: 'food27',
        component: '',
        ...subSection
      },
      {
        _uid: 'food28',
        component: '',
        ...subSection
      },
      {
        _uid: 'food29',
        component: '',
        ...subSection
      }
    ]
  }
]

export const dataBeverage: IMenu[] = [
  {
    _uid: 'somerandomuid1',
    title: 'Beer',
    description: 'hello',
    slug: 'beer',
    component: '',
    subsections: [
      {
        _uid: 'beverages0',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages1',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages2',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages3',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages4',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages5',
        component: '',
        ...subSection
      }
    ]
  },
  {
    _uid: 'somerandomuid2',
    title: 'Wine',
    description: 'hello',
    slug: 'wine',
    component: '',
    subsections: [
      {
        _uid: 'beverages6',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages7',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages8',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages9',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages10',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages11',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages12',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages13',
        component: '',
        ...subSection
      }
    ]
  },
  {
    _uid: 'somerandomuid3',
    title: 'Liquor',
    description: 'hello',
    slug: 'liquor',
    component: '',
    subsections: [
      {
        _uid: 'beverages14',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages15',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages16',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages17',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages18',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages19',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages20',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages21',
        component: '',
        ...subSection
      }
    ]
  },
  {
    _uid: 'somerandomuid4',
    title: 'Soft Drinks',
    description: 'hello',
    slug: 'soft-drinks',
    component: '',
    subsections: [
      {
        _uid: 'beverages22',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages23',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages24',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages25',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages26',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages27',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages28',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages29',
        component: '',
        ...subSection
      }
    ]
  },
  {
    _uid: 'somerandomuid4',
    title: 'Fruit Juice',
    description: 'hello',
    slug: 'fruit-juice',
    component: '',
    subsections: [
      {
        _uid: 'beverages33',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages34',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages35',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages36',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages37',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages38',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages39',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages40',
        component: '',
        ...subSection
      }
    ]
  },
  {
    _uid: 'somerandomuid4',
    title: 'Energy Drinks',
    description: 'hello',
    slug: 'energy-drinks',
    component: '',
    subsections: [
      {
        _uid: 'beverages42',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages43',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages44',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages45',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages46',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages47',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages48',
        component: '',
        ...subSection
      },
      {
        _uid: 'beverages49',
        component: '',
        ...subSection
      }
    ]
  }
]

const notFoundSubcategory = {
  _uid: 'notfoundcategory123',
  component: '',
  image: { name: 'image', filename: 'https://picsum.photos/200' },
  title: 'This item is not found',
  description: {
    content: [{ type: 'paragraph', content: [{ text: 'Fresh grilled heavy paneer', type: 'text' }] }]
  },
  choices,
  price: 25
}

export const allItems = [
  ...dataFood
    .map((x) => x.subsections)
    .map((x) => x)
    .flat(),
  ...dataBeverage
    .map((x) => x.subsections)
    .map((x) => x)
    .flat()
]

export const categories = {
  food: dataFood,
  beverages: dataBeverage
}

export const getCategoriesMock = (serviceType: string): Promise<typeof dataFood | typeof dataBeverage> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!serviceType) {
        resolve([])
      }
      resolve(categories[serviceType] || [])
    }, 500)
  })
}

export const getItemMock = (uid: string): Promise<IMenuSubsection> => {
  return new Promise((res) => {
    setTimeout(() => {
      if (uid === '123') {
        res(notFoundSubcategory as any)
        return
      }
      const result = allItems.find((x) => x._uid === uid)
      res(result || null)
    }, 400)
  })
}
