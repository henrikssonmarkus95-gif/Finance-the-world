import YearOverYearCards from '../components/comparison/YearOverYearCards'
import QuarterlyGrowthChart from '../components/comparison/QuarterlyGrowthChart'
import KPIDevelopmentChart from '../components/comparison/KPIDevelopmentChart'
import ComparisonTable from '../components/comparison/ComparisonTable'

export default function Comparison() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[32px] font-semibold text-[#050316] mb-2">Jämförelser</h1>
        <p className="text-[14px] text-[#050316]/60">
          År-till-år jämförelser och historiska trender.
        </p>
      </div>

      {/* Year over Year KPI Cards */}
      <YearOverYearCards />

      {/* Charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuarterlyGrowthChart />
        <KPIDevelopmentChart />
      </div>

      {/* Full Comparison Table */}
      <div>
        <h2 className="text-[20px] font-medium text-[#050316] mb-4">Jämförelsetabell – Alla nyckeltal</h2>
        <ComparisonTable />
      </div>
    </div>
  )
}
