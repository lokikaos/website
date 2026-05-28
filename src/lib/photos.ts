import type { Photo } from '@/components/PhotoGrid'

// Placeholder photos via picsum.photos. Stable seed-based URLs.
// Replace these with real photos in /public/images later.
const pic = (id: number, w: number, h: number): string =>
  `https://picsum.photos/id/${id}/${w}/${h}`

export const homeHero = {
  src: pic(1015, 2000, 1100),
  alt: 'Landscape portrait',
}

export const homeGrid: Photo[] = [
  { src: pic(1011, 800, 1000), alt: 'Portrait', width: 800, height: 1000 },
  { src: pic(1018, 900, 600), alt: 'Mountain', width: 900, height: 600 },
  { src: pic(1025, 800, 1100), alt: 'Dog', width: 800, height: 1100 },
  { src: pic(1036, 900, 700), alt: 'Light', width: 900, height: 700 },
  { src: pic(1040, 900, 1200), alt: 'Field', width: 900, height: 1200 },
  { src: pic(1043, 800, 600), alt: 'Forest', width: 800, height: 600 },
  { src: pic(1059, 1000, 700), alt: 'Coast', width: 1000, height: 700 },
  { src: pic(1067, 800, 1000), alt: 'Studio', width: 800, height: 1000 },
  { src: pic(1074, 900, 900), alt: 'Travel', width: 900, height: 900 },
]

export const fullPortfolio: Photo[] = [
  ...homeGrid,
  { src: pic(1080, 900, 1100), alt: 'Architecture', width: 900, height: 1100 },
  { src: pic(1084, 1000, 700), alt: 'Cliffs', width: 1000, height: 700 },
  { src: pic(110, 800, 1000), alt: 'Window', width: 800, height: 1000 },
  { src: pic(112, 1000, 750), alt: 'Bridge', width: 1000, height: 750 },
  { src: pic(119, 800, 1100), alt: 'Studio portrait', width: 800, height: 1100 },
  { src: pic(129, 900, 600), alt: 'Town', width: 900, height: 600 },
  { src: pic(133, 800, 1000), alt: 'Trail', width: 800, height: 1000 },
  { src: pic(141, 1000, 800), alt: 'Lake', width: 1000, height: 800 },
  { src: pic(152, 900, 1200), alt: 'Doorway', width: 900, height: 1200 },
  { src: pic(160, 1000, 700), alt: 'Horizon', width: 1000, height: 700 },
  { src: pic(177, 800, 1000), alt: 'Quiet street', width: 800, height: 1000 },
  { src: pic(180, 900, 700), alt: 'Sun', width: 900, height: 700 },
]
