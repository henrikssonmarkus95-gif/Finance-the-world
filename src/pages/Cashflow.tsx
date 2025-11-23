import WaterfallChart from '../components/cashflow/WaterfallChart'
import RevenueCostChart from '../components/cashflow/RevenueCostChart'
import AverageKPICards from '../components/cashflow/AverageKPICards'

export default function Cashflow() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[32px] font-semibold text-[#050316] mb-2">Kassaflöde</h1>
        <p className="text-[14px] text-[#050316]/60">
          Kassaflödesanalys med månatlig uppdelning och prognoser.
        </p>
      </div>

      {/* Average KPI Cards */}
      <AverageKPICards />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WaterfallChart />
        <RevenueCostChart />
      </div>
    </div>
  )
}
