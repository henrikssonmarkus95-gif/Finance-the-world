interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-8">
      <div>
        <h1 className="text-[40px] font-semibold text-[#050316] tracking-tight leading-tight">{title}</h1>
        {description && (
          <p className="text-[15px] text-[#050316]/50 mt-2">{description}</p>
        )}
      </div>
      {children && (
        <div className="flex items-center gap-3">
          {children}
        </div>
      )}
    </div>
  )
}
