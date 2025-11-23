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
    <div className="min-h-screen bg-[#fafafa]">
      <Sidebar />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-[#e5e7eb] z-50 px-4 py-4">
        <div className="flex items-center justify-between">
          <span className="text-[18px] font-semibold text-[#050316] tracking-tight">Arcim</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-[#fafafa] transition-colors"
            aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-[#050316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-[#050316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed top-[60px] left-0 right-0 bg-white border-b border-[#e5e7eb] shadow-lg" onClick={e => e.stopPropagation()}>
            <nav className="p-4">
              {mobileNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3.5 rounded-lg mb-1 text-[14px] transition-colors ${
                      isActive
                        ? 'bg-[#050316] text-white font-medium'
                        : 'text-[#050316]/70 hover:bg-[#fafafa]'
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

      <div className="lg:ml-64 pt-[60px] lg:pt-0">
        <Header />
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
