interface SectionProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ title, description, children, className = '' }: SectionProps) {
  return (
    <section className={className}>
      {(title || description) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-[24px] font-semibold text-[#050316] tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="text-[14px] text-[#050316]/50 mt-1">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
