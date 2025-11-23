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
    <div className="min-h-screen bg-[#f9faf7]">
      <Sidebar />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-[#e5e7eb] z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#427bf6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-[16px] font-semibold text-[#427bf6]">Arcim</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-[#f9faf7] transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-[#050316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-[#050316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div className="fixed top-14 left-0 right-0 bg-white border-b border-[#e5e7eb] shadow-lg" onClick={e => e.stopPropagation()}>
            <nav className="p-4">
              {mobileNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg mb-1 text-[14px] transition-colors ${
                      isActive
                        ? 'bg-[#427bf6] text-white font-medium'
                        : 'text-[#050316]/70 hover:bg-[#f9faf7]'
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

      <div className="lg:ml-64 pt-14 lg:pt-0">
        <Header />
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
