interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export default function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-10 mb-2">
      <div className="relative">
        <div className="absolute -left-4 top-3 w-1 h-8 bg-[#050316]" />
        <h1 className="text-[36px] font-bold text-[#050316] tracking-tight leading-[1.1]">{title}</h1>
        {description && (
          <p className="text-[14px] text-[#050316]/45 mt-3 max-w-md">{description}</p>
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
