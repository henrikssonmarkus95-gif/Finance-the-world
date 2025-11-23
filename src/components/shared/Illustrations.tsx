// Editorial line-art illustrations for Arcim
// Style: Thin monochrome lines, geometric, fintech-focused

export function ChartIllustration({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bar chart with trend line */}
      <rect x="10" y="50" width="8" height="20" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="25" y="35" width="8" height="35" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="40" y="25" width="8" height="45" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="55" y="40" width="8" height="30" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="70" y="20" width="8" height="50" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Trend line */}
      <path d="M14 45 L29 30 L44 18 L59 32 L74 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Circle accent */}
      <circle cx="74" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Grid lines */}
      <line x1="5" y1="70" x2="85" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="5" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
      <line x1="5" y1="30" x2="85" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
      {/* Decorative elements */}
      <circle cx="100" cy="25" r="12" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="100" cy="25" r="6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <line x1="95" y1="50" x2="110" y2="65" stroke="currentColor" strokeWidth="1" />
      <line x1="95" y1="65" x2="110" y2="50" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function FlowIllustration({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flow arrows representing transactions/data flow */}
      <circle cx="15" cy="30" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="50" cy="30" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="85" cy="30" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Connecting arrows */}
      <path d="M23 30 L42 30" stroke="currentColor" strokeWidth="1" />
      <path d="M38 26 L42 30 L38 34" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M58 30 L77 30" stroke="currentColor" strokeWidth="1" />
      <path d="M73 26 L77 30 L73 34" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Geometric accents */}
      <rect x="5" y="10" width="4" height="4" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <rect x="91" y="46" width="4" height="4" stroke="currentColor" strokeWidth="0.5" fill="none" />
      {/* Plus signs for growth */}
      <line x1="48" y1="10" x2="52" y2="10" stroke="currentColor" strokeWidth="0.75" />
      <line x1="50" y1="8" x2="50" y2="12" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  )
}

export function GridIllustration({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Data grid pattern */}
      <rect x="10" y="10" width="15" height="15" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="30" y="10" width="15" height="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <rect x="50" y="10" width="15" height="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <rect x="10" y="30" width="15" height="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <rect x="30" y="30" width="15" height="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <rect x="50" y="30" width="15" height="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <rect x="10" y="50" width="15" height="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <rect x="30" y="50" width="15" height="15" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <rect x="50" y="50" width="15" height="15" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Diagonal accent */}
      <line x1="70" y1="10" x2="70" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      {/* Circle highlight */}
      <circle cx="37.5" cy="37.5" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

export function PieIllustration({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pie/donut chart */}
      <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="30" cy="30" r="12" stroke="currentColor" strokeWidth="0.5" fill="none" />
      {/* Segments */}
      <path d="M30 8 A22 22 0 0 1 49.8 40.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="30" y1="30" x2="30" y2="8" stroke="currentColor" strokeWidth="0.75" />
      <line x1="30" y1="30" x2="49.8" y2="40.5" stroke="currentColor" strokeWidth="0.75" />
      {/* Accent dot */}
      <circle cx="30" cy="8" r="2" fill="currentColor" />
    </svg>
  )
}

export function TrendIllustration({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Upward trend line */}
      <path d="M5 40 Q25 35 35 25 T65 15 T95 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Data points */}
      <circle cx="5" cy="40" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="35" cy="25" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="65" cy="15" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="95" cy="5" r="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
      {/* Baseline */}
      <line x1="0" y1="45" x2="100" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      {/* Grid marks */}
      <line x1="25" y1="43" x2="25" y2="47" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="50" y1="43" x2="50" y2="47" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="75" y1="43" x2="75" y2="47" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    </svg>
  )
}
