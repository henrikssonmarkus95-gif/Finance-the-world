import { ReactNode, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

const mobileNavItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/kpi', label: 'Nyckeltal' },
  { path: '/cashflow', label: 'Kassaflöde' },
  { path: '/results', label: 'Resultat & Vinst' },
  { path: '/balance', label: 'Balansräkning' },
  { path: '/financing', label: 'Finansiering' },
  { path: '/comparison', label: 'Jämförelser' },
]

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Sidebar />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-[#e2e4e9] z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-5 bg-[#050316]" />
            <span className="text-[16px] font-bold text-[#050316] tracking-tight">Arcim</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-sm hover:bg-[#f1f3f5] transition-colors"
            aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5 text-[#050316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-[#050316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed top-[52px] left-0 right-0 bg-white border-b border-[#e2e4e9] shadow-lg" onClick={e => e.stopPropagation()}>
            <nav className="p-3">
              {mobileNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-sm mb-0.5 text-[13px] transition-colors ${
                      isActive
                        ? 'bg-[#050316] text-white font-semibold'
                        : 'text-[#050316]/55 hover:bg-[#f1f3f5] font-medium'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="lg:ml-64 pt-[52px] lg:pt-0">
        <Header />
        <main className="p-5 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
