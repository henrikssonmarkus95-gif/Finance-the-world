import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/kpi', label: 'Nyckeltal' },
  { path: '/cashflow', label: 'Kassaflöde' },
  { path: '/results', label: 'Resultat & Vinst' },
  { path: '/balance', label: 'Balansräkning' },
  { path: '/financing', label: 'Finansiering' },
  { path: '/comparison', label: 'Jämförelser' },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-[#e5e7eb] hidden lg:block">
      <div className="p-8 border-b border-[#e5e7eb]">
        <h2 className="text-[22px] text-[#050316] font-semibold tracking-tight">Arcim</h2>
        <p className="text-[12px] text-[#050316]/50 mt-1">Finansiell Dashboard</p>
      </div>
      <nav className="p-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-3.5 rounded-lg mb-1 text-[14px] transition-colors duration-200 ${
                isActive
                  ? 'bg-[#050316] text-white font-medium'
                  : 'text-[#050316]/70 hover:bg-[#f9faf7] hover:text-[#050316]'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
