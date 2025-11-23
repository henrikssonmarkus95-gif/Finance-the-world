import CompanyHeader from '../components/dashboard/CompanyHeader'
import KPICard from '../components/dashboard/KPICard'
import MonthlyRevenueChart from '../components/dashboard/MonthlyRevenueChart'
import CostBreakdownChart from '../components/dashboard/CostBreakdownChart'
import MonthlyNetResultChart from '../components/dashboard/MonthlyNetResultChart'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Company Header */}
      <CompanyHeader />

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Nettoomsättning 2024"
          value="1 362 711 kr"
          comparison="vs 2023: 38 311 kr"
          changeText="+3 457.0%"
        />
        <KPICard
          title="Rörelseresultat 2024"
          value="27 593 kr"
          comparison="vs 2023: 42 263 kr"
          changeText="-34.7%"
        />
        <KPICard
          title="Soliditet"
          value="50.0%"
          comparison="vs 2023: 16.1%"
          changeText="+33.9 procentenheter"
        />
        <KPICard
          title="Kassalikviditet"
          value="98.3%"
          comparison="vs 2023: 83.3%"
          changeText="+15.0 procentenheter"
        />
        <KPICard
          title="Årets Resultat"
          value="11 714 kr"
          comparison="vs 2023: 30 969 kr"
          changeText="-62.2%"
        />
        <KPICard
          title="Nettomarginal"
          value="3.9%"
          comparison="Period: Okt 2024 - Okt 2025"
          changeText="Baserad på: Gokind-data"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlyRevenueChart />
        <CostBreakdownChart />
      </div>

      <MonthlyNetResultChart />
    </div>
  )
}
