import BalanceTable from '../components/balance/BalanceTable'
import CapitalStructureChart from '../components/balance/CapitalStructureChart'
import AssetAllocationChart from '../components/balance/AssetAllocationChart'

export default function Balance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[32px] font-semibold text-[#050316] mb-2">Balansräkning</h1>
        <p className="text-[14px] text-[#050316]/60">
          Tillgångar, skulder och eget kapital i detalj.
        </p>
      </div>

      {/* Balance Sheet Table */}
      <BalanceTable />

      {/* Charts side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CapitalStructureChart />
        <AssetAllocationChart />
      </div>
    </div>
  )
}
