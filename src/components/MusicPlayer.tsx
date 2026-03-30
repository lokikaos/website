'use client'

import { useState } from 'react'
import type { Track } from '@/lib/data'

interface MusicPlayerProps {
  tracks: Track[]
  accentColor?: 'gold' | 'lou'
}

export default function MusicPlayer({ tracks, accentColor = 'gold' }: MusicPlayerProps) {
  const [activeTrack, setActiveTrack] = useState<Track>(tracks[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const isLou = accentColor === 'lou'

  const handleTrackSelect = (track: Track) => {
    if (activeTrack.id === track.id) {
      setIsPlaying(!isPlaying)
    } else {
      setActiveTrack(track)
      setIsPlaying(true)
    }
  }

  return (
    <div className="bg-surface border border-border">
      <div className="flex flex-col lg:flex-row">
        {/* Track List */}
        <div className="lg:w-2/5 border-b lg:border-b-0 lg:border-r border-border overflow-y-auto max-h-80 lg:max-h-none">
          {tracks.map((track, index) => {
            const isActive = activeTrack.id === track.id
            return (
              <button
                key={track.id}
                onClick={() => handleTrackSelect(track)}
                className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-colors duration-200 border-b border-border last:border-b-0 group ${
                  isActive ? 'bg-surface-2' : 'hover:bg-surface-2'
                }`}
              >
                <span
                  className={`font-sans text-xs tabular-nums w-6 flex-shrink-0 ${
                    isActive
                      ? isLou ? 'text-lou' : 'text-gold'
                      : 'text-muted group-hover:text-secondary'
                  }`}
                >
                  {isActive && isPlaying ? (
                    <span className="flex gap-0.5 items-end h-3">
                      <span className={`w-0.5 h-3 animate-pulse ${isLou ? 'bg-lou' : 'bg-gold'}`} />
                      <span className={`w-0.5 h-2 animate-pulse delay-75 ${isLou ? 'bg-lou' : 'bg-gold'}`} />
                      <span className={`w-0.5 h-3 animate-pulse delay-150 ${isLou ? 'bg-lou' : 'bg-gold'}`} />
                    </span>
                  ) : (
                    String(index + 1).padStart(2, '0')
                  )}
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-sans text-sm font-medium truncate ${
                      isActive ? 'text-warm-white' : 'text-secondary group-hover:text-warm-white'
                    }`}
                  >
                    {track.title}
                  </p>
                  <p className="font-sans text-xs text-muted truncate mt-0.5">{track.album}</p>
                </div>
                <span className="font-sans text-xs text-muted tabular-nums flex-shrink-0">
                  {track.duration}
                </span>
              </button>
            )
          })}
        </div>

        {/* Player Area */}
        <div className="lg:flex-1 p-8 lg:p-12 flex flex-col justify-between min-h-[280px]">
          {/* Track Info */}
          <div>
            <p className={`section-label mb-3 ${isLou ? 'text-lou' : 'text-gold'}`}>
              Now {isPlaying ? 'Playing' : 'Selected'}
            </p>
            <h3 className="font-display text-3xl lg:text-4xl text-warm-white font-light leading-tight">
              {activeTrack.title}
            </h3>
            <p className="font-sans text-sm text-secondary mt-2">{activeTrack.album}</p>
            <p className="font-sans text-xs text-muted mt-1">{activeTrack.year}</p>
          </div>

          {/* Controls */}
          <div className="mt-8">
            {/* Play/Pause Button */}
            <div className="flex items-center gap-6 mb-6">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 group ${
                  isLou
                    ? 'border-lou hover:bg-lou'
                    : 'border-gold hover:bg-gold'
                }`}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg
                    className={`w-5 h-5 group-hover:text-base ${isLou ? 'text-lou' : 'text-gold'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg
                    className={`w-5 h-5 ml-0.5 group-hover:text-base ${isLou ? 'text-lou' : 'text-gold'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <div className="flex-1">
                {/* Progress Bar */}
                <div className="relative h-px bg-border-light">
                  <div
                    className={`absolute left-0 top-0 h-full transition-all duration-300 ${isLou ? 'bg-lou-dim' : 'bg-gold-dim'}`}
                    style={{ width: '0%' }}
                  />
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${isLou ? 'bg-lou' : 'bg-gold'}`}
                    style={{ left: '0%' }}
                  />
                </div>
                {/* Time */}
                <div className="flex justify-between mt-2">
                  <span className="font-sans text-xs text-muted">0:00</span>
                  <span className="font-sans text-xs text-muted">{activeTrack.duration}</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="font-sans text-xs text-muted">
              Visual player — stream on{' '}
              <a
                href="#"
                className={`hover:underline transition-colors ${isLou ? 'text-lou' : 'text-gold'}`}
              >
                Spotify
              </a>{' '}
              or{' '}
              <a
                href="#"
                className={`hover:underline transition-colors ${isLou ? 'text-lou' : 'text-gold'}`}
              >
                Bandcamp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
