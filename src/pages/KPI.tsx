import KPIRadarChart from '../components/kpi/KPIRadarChart'
import KPITable from '../components/kpi/KPITable'
import LiquidityCards from '../components/kpi/LiquidityCards'

export default function KPI() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[32px] font-semibold text-[#050316] mb-2">Nyckeltal</h1>
        <p className="text-[14px] text-[#050316]/60">
          Detaljerad analys av finansiella nyckeltal med jämförelser.
        </p>
      </div>

      {/* Radar Chart and Table side by side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <KPIRadarChart />
        <div className="space-y-6">
          <h2 className="text-[20px] font-medium text-[#050316]">Detaljerad nyckeltalstabell</h2>
          <KPITable />
        </div>
      </div>

      {/* Liquidity Analysis */}
      <div>
        <h2 className="text-[20px] font-medium text-[#050316] mb-4">Likviditetsanalys</h2>
        <LiquidityCards />
      </div>
    </div>
  )
}
