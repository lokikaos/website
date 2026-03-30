import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { journalPosts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Writing on music, craft, process, and the creative life by Loki Zorrilla.',
}

export default function JournalPage() {
  const featured = journalPosts[0]
  const rest = journalPosts.slice(1)

  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1
            className="font-display font-light text-warm-white leading-none"
            style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
          >
            Journal
          </h1>
          <p className="font-sans text-sm text-secondary max-w-xs leading-relaxed">
            Writing on music, process, craft, and the space between records.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-8 md:px-16 lg:px-24 pb-16">
        <Link href={`/journal/${featured.slug}`} className="block group">
          <div className="border border-border hover:border-gold-dim transition-colors duration-500">
            <ImagePlaceholder
              aspectRatio="16/7"
              label="[ FEATURED ]"
              className="w-full"
            />
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="section-label text-gold-dim">{featured.category}</span>
                <span className="text-xs text-muted font-sans">{featured.date}</span>
                <span className="text-xs text-muted font-sans">{featured.readTime}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-warm-white group-hover:text-gold transition-colors duration-300 mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="font-sans text-base text-secondary leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
              <p className="mt-6 font-sans text-xs text-gold tracking-[0.1em] uppercase">
                Read Article →
              </p>
            </div>
          </div>
        </Link>
      </section>

      {/* Remaining Posts Grid */}
      <section className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="divider mb-16" />
        <p className="section-label mb-10">More Writing</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group flex flex-col gap-4"
            >
              <ImagePlaceholder
                aspectRatio="16/9"
                label={`[ ${post.category.toUpperCase()} ]`}
                className="w-full"
              />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="section-label text-gold-dim">{post.category}</span>
                </div>
                <h3 className="font-display text-2xl font-light text-warm-white group-hover:text-gold transition-colors duration-200 mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="font-sans text-sm text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="font-sans text-xs text-muted">{post.date}</span>
                  <span className="font-sans text-xs text-muted">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
