import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export default function Card({ children, className = '', title, subtitle }: CardProps) {
  return (
    <div className={`bg-white border border-[#e5e7eb] rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`}>
      {(title || subtitle) && (
        <div className="px-6 pt-6 pb-4">
          {title && <h3 className="text-[20px] font-medium text-[#050316]">{title}</h3>}
          {subtitle && <p className="text-[12px] text-[#050316]/60 mt-1">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  )
}
