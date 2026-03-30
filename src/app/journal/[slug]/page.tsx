import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { journalPosts } from '@/lib/data'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return journalPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = journalPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function JournalPostPage({ params }: PageProps) {
  const post = journalPosts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <main className="pt-16">
      {/* Post Header */}
      <section className="pt-16 pb-12 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-label text-gold-dim">{post.category}</span>
            <span className="text-xs text-muted font-sans">{post.date}</span>
            <span className="text-xs text-muted font-sans">{post.readTime}</span>
          </div>
          <h1
            className="font-display font-light text-warm-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {post.title}
          </h1>
          <p className="font-sans text-base text-secondary leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Header Image */}
      <section className="px-8 md:px-16 lg:px-24 mb-16">
        <ImagePlaceholder
          aspectRatio="16/7"
          label="[ ARTICLE IMAGE ]"
          className="w-full"
        />
      </section>

      {/* Article Body */}
      <section className="px-8 md:px-16 lg:px-24 pb-24">
        <div className="max-w-2xl">
          <div className="flex flex-col gap-6 font-sans text-base text-secondary leading-[1.85]">
            <p>
              There&apos;s a particular kind of silence that precedes a good song. Not the silence of
              having nothing to say — that&apos;s a different animal entirely, and one worth learning to
              distinguish early. This is the silence of approaching something from the wrong angle and
              knowing it before you can articulate why. The song exists. You can feel its mass. But
              the door hasn&apos;t revealed itself yet.
            </p>
            <p>
              I&apos;ve spent months on either side of that door. The songs that arrived quickly —
              thirty minutes from first chord to final word — are often the ones I&apos;m least sure
              about. They feel like gifts, which means they also feel precarious. Something given can
              be taken back. Something earned through labor has a different kind of weight.
            </p>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-gold pl-6 my-6">
              <p className="font-display italic text-2xl text-warm-white font-light leading-snug">
                &ldquo;The best songs don&apos;t feel written. They feel discovered — as if they were always
                there, waiting for the right person to stop and listen.&rdquo;
              </p>
            </blockquote>

            <p>
              The process I&apos;ve arrived at, after years of trying to short-circuit it, is essentially
              patience dressed up as methodology. I write observations. Not songs — observations.
              Something I saw, heard, or felt that seemed to carry more weight than the moment
              justified. These go into notebooks, undeveloped, often for months.
            </p>
            <p>
              At some point, usually during the kind of mindless activity that lets the subconscious
              do its work — driving, washing dishes, the edge of sleep — one of those observations
              will suddenly have a chord attached to it. Not a full song, just a root. From there,
              if I&apos;m careful not to force it, the rest follows.
            </p>
            <p>
              The failure mode I&apos;ve had to learn to recognize is the one where I mistake activity for
              progress. Sitting at the guitar for four hours feels productive. It can be. But it can
              also be a way of performing creativity without actually doing it. The songs that needed
              space can&apos;t be willed into existence. They require something closer to waiting — the
              active, attentive kind of waiting that looks, from the outside, like not doing anything
              at all.
            </p>
            <p>
              None of this is advice. What works for me has everything to do with the particular
              shape of my blocks and nothing to do with yours. But I&apos;ve found, in talking to other
              writers, that the experience of circling a thing before you can approach it directly is
              nearly universal. The methods differ. The fundamental dynamic — the song knowing
              something you don&apos;t yet — seems to be a constant.
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="px-8 md:px-16 lg:px-24 pb-24 border-t border-border pt-12">
        <Link href="/journal" className="btn-ghost">
          ← Back to Journal
        </Link>
      </section>
    </main>
  )
}
