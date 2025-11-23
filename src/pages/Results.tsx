import ResultTable from '../components/results/ResultTable'
import CostDevelopmentChart from '../components/results/CostDevelopmentChart'
import MarginAnalysis from '../components/results/MarginAnalysis'

export default function Results() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[32px] font-semibold text-[#050316] mb-2">Resultat & Vinst</h1>
        <p className="text-[14px] text-[#050316]/60">
          Resultaträkningsanalys med kostnadsnedbrytning.
        </p>
      </div>

      {/* Margin Analysis Cards */}
      <MarginAnalysis />

      {/* Table and Chart side by side */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div>
          <h2 className="text-[20px] font-medium text-[#050316] mb-4">Resultaträkning</h2>
          <ResultTable />
        </div>
        <CostDevelopmentChart />
      </div>
    </div>
  )
}
