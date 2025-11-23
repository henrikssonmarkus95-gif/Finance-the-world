interface InsightBoxProps {
  title: string
  children: React.ReactNode
  variant?: 'default' | 'highlight' | 'warning'
}

export default function InsightBox({ title, children, variant = 'default' }: InsightBoxProps) {
  const variants = {
    default: 'bg-[#f1f3f5] border-l-[3px] border-l-[#050316]/20',
    highlight: 'bg-[#050316] text-white',
    warning: 'bg-[#f1f3f5] border-l-[3px] border-l-[#050316]',
  }

  const isHighlight = variant === 'highlight'

  return (
    <div className={`rounded-sm p-5 ${variants[variant]}`}>
      <p className={`text-[11px] font-bold tracking-[0.1em] uppercase mb-2 ${
        isHighlight ? 'text-white/70' : 'text-[#050316]/50'
      }`}>{title}</p>
      <div className={`text-[14px] leading-relaxed ${
        isHighlight ? 'text-white/90' : 'text-[#050316]/65'
      }`}>
        {children}
      </div>
    </div>
  )
}
