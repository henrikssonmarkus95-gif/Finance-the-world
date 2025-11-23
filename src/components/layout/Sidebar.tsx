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
    <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-[#e2e4e9] hidden lg:block">
      <div className="p-6 pb-5 border-b border-[#e2e4e9]">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-[#050316]" />
          <h2 className="text-[20px] text-[#050316] font-bold tracking-tight">Arcim</h2>
        </div>
        <p className="text-[10px] text-[#050316]/40 mt-2 pl-3.5 uppercase tracking-[0.15em] font-medium">Finansiell Dashboard</p>
      </div>
      <nav className="p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-3 py-2.5 rounded-sm mb-0.5 text-[13px] transition-all duration-150 ${
                isActive
                  ? 'bg-[#050316] text-white font-semibold'
                  : 'text-[#050316]/55 hover:bg-[#f1f3f5] hover:text-[#050316] font-medium'
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
