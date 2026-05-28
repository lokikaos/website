import type { Photo } from '@/components/PhotoGrid'

/**
 * Real photo entries go here once they're added to /public/images/.
 * Example:
 *   { src: '/images/portrait-01.jpg', alt: 'Portrait', width: 800, height: 1000 },
 *
 * Until then the grid components render empty placeholder tiles via
 * the EMPTY_PREVIEW_TILES constant (no stock imagery).
 */
export const homeGrid: Photo[] = []

export const fullPortfolio: Photo[] = []

// Number of empty preview tiles to show on the homepage Photography section.
export const EMPTY_PREVIEW_TILES = 3
