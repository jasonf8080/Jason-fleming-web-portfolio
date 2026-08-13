export default function JFLogo({ variant = 'dark', className = '' }) {
  const ring = variant === 'light' ? '#F7F4EF' : '#121110'
  const fill = variant === 'light' ? '#121110' : '#F7F4EF'

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        role="img"
        aria-label="Jason Fleming logo"
        className="shrink-0"
      >
        <circle cx="32" cy="32" r="30.5" fill={ring} stroke="#BE4A34" strokeWidth="1.5" />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
          fontSize="24"
          fill={fill}
        >
          JF
        </text>
      </svg>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="text-sm font-semibold tracking-widest2 uppercase">Jason Fleming</span>
        <span className="text-[11px] tracking-widest2 uppercase opacity-60">Web Design &amp; Dev</span>
      </span>
    </span>
  )
}
