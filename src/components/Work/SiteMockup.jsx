// Decorative browser + phone frame representing a client site in its own
// brand colors. Built entirely from divs (no <img>) since it's a stylized
// composition, not a literal screenshot — swap in real photography here
// (tag: "gallery"/"hero") once available, following the image rules.
export default function SiteMockup({ client, theme, compact = false }) {
  const { bg, fg, accent } = theme

  return (
    <div className={`flex items-end gap-4 ${compact ? '' : 'md:gap-6'}`} aria-hidden="true">
      {/* Desktop frame */}
      <div
        className={`relative flex-1 overflow-hidden rounded-t-lg border border-primary/10 shadow-xl ${
          compact ? 'aspect-[16/10]' : 'aspect-[16/10]'
        }`}
        style={{ backgroundColor: bg }}
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex h-full flex-col items-center justify-center gap-3 px-6 pb-10 text-center">
          <span
            className="text-[10px] font-semibold uppercase tracking-widest2"
            style={{ color: accent }}
          >
            {client}
          </span>
          <span
            className="max-w-[80%] text-lg font-semibold uppercase leading-snug md:text-2xl"
            style={{ color: fg }}
          >
            {client}
          </span>
          <span className="h-px w-16" style={{ backgroundColor: accent }} />
          <span className="text-[10px] uppercase tracking-widest2" style={{ color: fg, opacity: 0.6 }}>
            Live Site Preview
          </span>
        </div>
      </div>

      {/* Phone frame */}
      <div
        className="relative hidden w-20 shrink-0 overflow-hidden rounded-2xl border-4 border-primary/10 shadow-xl sm:block md:w-28"
        style={{ backgroundColor: bg, aspectRatio: '9 / 19' }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-2 px-2 text-center">
          <span
            className="text-[7px] font-semibold uppercase tracking-widest2 md:text-[8px]"
            style={{ color: accent }}
          >
            {client.split(' ')[0]}
          </span>
          <span className="h-px w-6" style={{ backgroundColor: fg, opacity: 0.3 }} />
          <span className="text-[6px] uppercase tracking-widest2 md:text-[7px]" style={{ color: fg, opacity: 0.5 }}>
            Mobile
          </span>
        </div>
      </div>
    </div>
  )
}
