export interface Track {
  id: string
  title: string
  album: string
  duration: string
  year: number
  artist: 'loki-zorrilla' | 'once-was-lou'
}

export interface JournalPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
}

export interface Album {
  id: string
  title: string
  year: number
  trackCount: number
  artist: 'loki-zorrilla' | 'once-was-lou'
  label: 'LZ' | 'OWL'
}

export const lokiTracks: Track[] = [
  {
    id: 'lz-01',
    title: 'Amber & Dust',
    album: 'Before the Rain',
    duration: '4:12',
    year: 2024,
    artist: 'loki-zorrilla',
  },
  {
    id: 'lz-02',
    title: 'Highway South',
    album: 'Before the Rain',
    duration: '3:47',
    year: 2024,
    artist: 'loki-zorrilla',
  },
  {
    id: 'lz-03',
    title: 'The Slow Burn',
    album: 'Fault Lines',
    duration: '5:03',
    year: 2023,
    artist: 'loki-zorrilla',
  },
  {
    id: 'lz-04',
    title: 'Wildfire Season',
    album: 'Fault Lines',
    duration: '3:58',
    year: 2023,
    artist: 'loki-zorrilla',
  },
  {
    id: 'lz-05',
    title: 'Worn Leather',
    album: 'Open Country',
    duration: '4:31',
    year: 2022,
    artist: 'loki-zorrilla',
  },
]

export const louTracks: Track[] = [
  {
    id: 'owl-01',
    title: 'Dissolve',
    album: 'Pale Architectures',
    duration: '5:44',
    year: 2024,
    artist: 'once-was-lou',
  },
  {
    id: 'owl-02',
    title: 'Signal Drift',
    album: 'Pale Architectures',
    duration: '6:12',
    year: 2024,
    artist: 'once-was-lou',
  },
  {
    id: 'owl-03',
    title: 'Glass City',
    album: 'Threshold',
    duration: '4:55',
    year: 2023,
    artist: 'once-was-lou',
  },
  {
    id: 'owl-04',
    title: 'Remnants',
    album: 'Threshold',
    duration: '7:02',
    year: 2023,
    artist: 'once-was-lou',
  },
  {
    id: 'owl-05',
    title: 'The Last Transmission',
    album: 'Static Bloom',
    duration: '5:29',
    year: 2022,
    artist: 'once-was-lou',
  },
]

export const allTracks: Track[] = [...lokiTracks, ...louTracks]

export const journalPosts: JournalPost[] = [
  {
    slug: 'on-writing-in-the-dark',
    title: 'On Writing in the Dark',
    excerpt:
      'Some songs arrive fully formed at 3am. Others take years of circling before they finally land. A reflection on the creative process and learning to trust the silence between ideas.',
    date: 'March 12, 2025',
    readTime: '6 min read',
    category: 'Process',
  },
  {
    slug: 'sync-licensing-what-i-learned',
    title: 'Sync Licensing: What Two Years Taught Me',
    excerpt:
      'Breaking into sync isn\'t about making music for TV — it\'s about making music that travels. Here\'s what I\'ve learned placing tracks with Once Was Lou in film and advertising.',
    date: 'February 3, 2025',
    readTime: '9 min read',
    category: 'Industry',
  },
  {
    slug: 'the-mixing-philosophy',
    title: 'My Mixing Philosophy',
    excerpt:
      'Mixing is translation. The challenge isn\'t adding — it\'s removing everything that doesn\'t belong. A deep dive into how I approach every mix that comes through the studio.',
    date: 'January 18, 2025',
    readTime: '7 min read',
    category: 'Craft',
  },
  {
    slug: 'two-artists-one-person',
    title: 'Two Artists, One Person',
    excerpt:
      'Why I maintain two distinct musical identities, and how the tension between Loki Zorrilla and Once Was Lou actually makes both projects stronger.',
    date: 'December 5, 2024',
    readTime: '5 min read',
    category: 'Reflection',
  },
]

export const services: Service[] = [
  {
    id: 'mixing-mastering',
    title: 'Mixing & Mastering',
    description:
      'Professional mixing and mastering services for independent artists and labels. From intimate folk recordings to dense electronic productions — every project gets the attention it deserves.',
    features: [
      'Stem organization and technical review',
      'Mix consultation and reference alignment',
      'Full mix with unlimited revisions (within scope)',
      'Master for streaming, vinyl, and broadcast',
      'Delivery in all required formats',
    ],
  },
  {
    id: 'sync-licensing',
    title: 'Sync Licensing',
    description:
      'Through the Once Was Lou catalog, I license original music for film, television, advertising, and interactive media. Cinematic, atmospheric, and designed to travel.',
    features: [
      'Non-exclusive sync licenses available',
      'Custom compositions for specific briefs',
      'Fast turnaround for advertising deadlines',
      'Full clearance and paperwork handled',
      'Cue sheets and broadcast ready files included',
    ],
  },
]

export const albums: Album[] = [
  {
    id: 'before-the-rain',
    title: 'Before the Rain',
    year: 2024,
    trackCount: 10,
    artist: 'loki-zorrilla',
    label: 'LZ',
  },
  {
    id: 'fault-lines',
    title: 'Fault Lines',
    year: 2023,
    trackCount: 9,
    artist: 'loki-zorrilla',
    label: 'LZ',
  },
  {
    id: 'open-country',
    title: 'Open Country',
    year: 2022,
    trackCount: 11,
    artist: 'loki-zorrilla',
    label: 'LZ',
  },
  {
    id: 'pale-architectures',
    title: 'Pale Architectures',
    year: 2024,
    trackCount: 8,
    artist: 'once-was-lou',
    label: 'OWL',
  },
  {
    id: 'threshold',
    title: 'Threshold',
    year: 2023,
    trackCount: 7,
    artist: 'once-was-lou',
    label: 'OWL',
  },
  {
    id: 'static-bloom',
    title: 'Static Bloom',
    year: 2022,
    trackCount: 9,
    artist: 'once-was-lou',
    label: 'OWL',
  },
]
