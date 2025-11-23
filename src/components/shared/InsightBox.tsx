interface InsightBoxProps {
  title: string
  children: React.ReactNode
  variant?: 'default' | 'highlight' | 'warning'
}

export default function InsightBox({ title, children, variant = 'default' }: InsightBoxProps) {
  const variants = {
    default: 'bg-[#fafafa] border-[#e5e7eb]',
    highlight: 'bg-[#fafafa] border-[#050316]/20',
    warning: 'bg-[#fafafa] border-[#050316]/20',
  }

  return (
    <div className={`rounded-xl border p-6 ${variants[variant]}`}>
      <p className="text-[14px] font-semibold text-[#050316] mb-2">{title}</p>
      <div className="text-[14px] text-[#050316]/60 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
