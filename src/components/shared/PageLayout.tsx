import { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {children}
    </div>
  )
}
