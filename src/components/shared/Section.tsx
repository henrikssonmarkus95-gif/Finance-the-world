interface SectionProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'muted' | 'highlight'
}

export default function Section({ title, description, children, className = '', variant = 'default' }: SectionProps) {
  const variants = {
    default: '',
    muted: 'bg-[#f1f3f5] -mx-6 px-6 py-8 lg:-mx-8 lg:px-8',
    highlight: 'border-l-[3px] border-[#050316] pl-6',
  }

  return (
    <section className={`${variants[variant]} ${className}`}>
      {(title || description) && (
        <div className="mb-5">
          {title && (
            <h2 className="text-[20px] font-bold text-[#050316] tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="text-[13px] text-[#050316]/45 mt-1">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
