import { loremIpsum } from 'helpers'

const CARDS_DESCRIPTION = loremIpsum.generateParagraphs(4).split('\n')

export const DEFAULT_IMAGE = 'https://i.stack.imgur.com/y9DpT.jpg'
export const TODAY_DATE = new Date().toISOString().split('T')[0]
export const RANDOM_IMAGE = 'https://source.unsplash.com/random?sig='

const LOCAL_CARDS_DATA = JSON.parse(localStorage.getItem('@/LS_KEY_CARDS'))

export const CARDS_DATA = LOCAL_CARDS_DATA || [
  {
    id: 1,
    image:
      'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
    title: 'Dorime',
    description: CARDS_DESCRIPTION[0],
    author: 'You',
    createdAt: '2021-08-01',
    tags: ['Ameno', 'Dorime', 'Nature'],
    isFavorite: false,
    likes: 525,
    views: 1566,
  },
  {
    id: 2,
    image: 'https://fototips.ru/wp-content/uploads/2012/03/00_Autumn_Photo.jpg',
    title: 'Interimo adapare, dorime',
    description: CARDS_DESCRIPTION[1],
    author: 'Kate',
    createdAt: '2021-08-01',
    tags: ['Interimo ', 'Adapare', 'Autumn'],
    isFavorite: false,
    likes: 123,
    views: 454,
  },
  {
    id: 3,
    image: '',
    title: 'Ameno, ameno',
    description: CARDS_DESCRIPTION[2],
    author: 'Kadzuha',
    createdAt: '2021-08-01',
    tags: ['Ameno', 'Latire', 'JavaScript'],
    isFavorite: false,
    likes: 1414,
    views: 2442,
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--2uofpL2Q--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hblvidvqydi2r53oe1qw.jpg',
    title: 'Latire, latiremo',
    description: CARDS_DESCRIPTION[3],
    author: 'You',
    createdAt: '2021-08-02',
    tags: ['React', 'TypeScript'],
    isFavorite: false,
    likes: 124,
    views: 353,
  },
]
