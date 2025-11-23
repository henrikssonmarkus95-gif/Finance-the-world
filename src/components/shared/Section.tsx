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
        <div className="mb-4">
          {title && (
            <h2 className="text-[18px] font-medium text-[#050316]">{title}</h2>
          )}
          {description && (
            <p className="text-[13px] text-[#050316]/60 mt-0.5">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
