interface ImagePlaceholderProps {
  className?: string
  label?: string
  aspectRatio?: string
}

export default function ImagePlaceholder({
  className = '',
  label = '[ IMAGE ]',
  aspectRatio = '16/9',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-surface-2 flex items-center justify-center ${className}`}
      style={{
        aspectRatio,
        background: `
          repeating-linear-gradient(
            45deg,
            rgba(255,255,255,0.03) 0px,
            rgba(255,255,255,0.03) 1px,
            transparent 1px,
            transparent 12px
          ),
          #1a1917
        `,
      }}
    >
      <span className="text-xs tracking-[0.25em] uppercase text-muted font-sans select-none">
        {label}
      </span>
    </div>
  )
}
