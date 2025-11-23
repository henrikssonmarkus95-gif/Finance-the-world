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
    <aside className="fixed left-0 top-0 h-full w-64 bg-arcim-surface border-r border-arcim-border hidden lg:block">
      <div className="p-6">
        <h2 className="text-h3 text-arcim-accent font-semibold">Arcim</h2>
        <p className="text-small text-arcim-primary/60 mt-1">Finansiell Dashboard</p>
      </div>
      <nav className="px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg mb-1 text-body transition-colors ${
                isActive
                  ? 'bg-arcim-accent/10 text-arcim-accent font-medium'
                  : 'text-arcim-primary/80 hover:bg-arcim-bg'
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
