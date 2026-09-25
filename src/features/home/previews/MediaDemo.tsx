/** A generic cartridge dropping into a top-loading slot, beside a disc spinning up. Original drawings. */
export function MediaDemo() {
  return (
    <div aria-hidden="true" className="flex h-44 items-end justify-center gap-10">
      <svg viewBox="0 0 120 140" className="h-full">
        <g className="demo-cart">
          <rect x="22" y="8" width="76" height="92" rx="5" fill="#9a9aa0" />
          <rect x="32" y="18" width="56" height="44" rx="3" fill="#f4f4f6" />
          <rect x="40" y="28" width="40" height="5" rx="2" fill="#1d1d1f" />
          <rect x="40" y="38" width="28" height="4" rx="2" fill="#b7b7bd" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={36 + i * 11} y="70" width="6" height="22" rx="2" fill="#86868c" />
          ))}
        </g>
        <rect x="6" y="92" width="108" height="46" rx="10" fill="#2b2b2e" />
        <rect x="18" y="92" width="84" height="8" rx="2" fill="#111" />
      </svg>
      <svg viewBox="0 0 120 120" className="h-[78%]">
        <g className="demo-disc" style={{ transformOrigin: '60px 60px', transformBox: 'view-box' }}>
          <circle cx="60" cy="60" r="56" fill="url(#disc-sheen)" />
          <circle cx="60" cy="60" r="18" fill="#e9e9ee" />
          <circle cx="60" cy="60" r="7" fill="white" stroke="#c7c7cc" />
        </g>
        <defs>
          <linearGradient id="disc-sheen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d9dbe3" />
            <stop offset="0.35" stopColor="#f7f3ff" />
            <stop offset="0.55" stopColor="#b9d4ff" />
            <stop offset="0.75" stopColor="#ffe3c7" />
            <stop offset="1" stopColor="#c9ccd6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
