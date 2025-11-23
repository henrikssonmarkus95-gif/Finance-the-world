interface InsightBoxProps {
  title: string
  children: React.ReactNode
  variant?: 'default' | 'highlight' | 'warning'
}

export default function InsightBox({ title, children, variant = 'default' }: InsightBoxProps) {
  const variants = {
    default: 'bg-[#f9faf7] border-[#e5e7eb]',
    highlight: 'bg-[#427bf6]/5 border-[#427bf6]/20',
    warning: 'bg-amber-50 border-amber-200',
  }

  return (
    <div className={`rounded-xl border p-4 ${variants[variant]}`}>
      <p className="text-[13px] font-medium text-[#050316] mb-1">{title}</p>
      <div className="text-[13px] text-[#050316]/70 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
