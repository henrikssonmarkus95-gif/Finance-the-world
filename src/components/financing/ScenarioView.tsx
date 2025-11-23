import { useState } from 'react'

const scenarios = [
  {
    id: 'current',
    name: 'Nuvarande',
    description: 'Utan finansiering',
    metrics: {
      cashBalance: '19 391 kr',
      workingCapital: '-5 676 kr',
      liquidity: '98,3%',
      runway: '0,7 mån',
    }
  },
  {
    id: 'factoring',
    name: 'Factoring',
    description: 'Frigör kundfordringar',
    metrics: {
      cashBalance: '~219 000 kr',
      workingCapital: '~194 000 kr',
      liquidity: '~155%',
      runway: '6-8 mån',
    }
  },
  {
    id: 'factoring-loan',
    name: 'Factoring + Lån',
    description: 'Kombinerad lösning',
    metrics: {
      cashBalance: '~719 000 kr',
      workingCapital: '~694 000 kr',
      liquidity: '~210%',
      runway: '12+ mån',
    }
  },
]

export default function ScenarioView() {
  const [activeScenario, setActiveScenario] = useState('factoring')
  const scenario = scenarios.find(s => s.id === activeScenario) || scenarios[0]

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-8">
      <h3 className="text-[18px] font-semibold text-[#050316] mb-2 tracking-tight">Scenarioanalys</h3>
      <p className="text-[14px] text-[#050316]/50 mb-6">
        Jämför effekten av olika finansieringslösningar på Klippsters nyckeltal
      </p>

      <div className="flex gap-2 mb-8">
        {scenarios.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveScenario(s.id)}
            className={`px-4 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
              activeScenario === s.id
                ? 'bg-[#050316] text-white'
                : 'bg-[#fafafa] text-[#050316]/60 hover:text-[#050316] border border-[#e5e7eb]'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-[#fafafa] rounded-xl p-5">
          <p className="text-[12px] text-[#050316]/50 mb-2 font-medium uppercase tracking-wide">Kassa och bank</p>
          <p className="text-[20px] font-semibold text-[#050316] tracking-tight">{scenario.metrics.cashBalance}</p>
        </div>
        <div className="bg-[#fafafa] rounded-xl p-5">
          <p className="text-[12px] text-[#050316]/50 mb-2 font-medium uppercase tracking-wide">Rörelsekapital</p>
          <p className="text-[20px] font-semibold text-[#050316] tracking-tight">{scenario.metrics.workingCapital}</p>
        </div>
        <div className="bg-[#fafafa] rounded-xl p-5">
          <p className="text-[12px] text-[#050316]/50 mb-2 font-medium uppercase tracking-wide">Kassalikviditet</p>
          <p className="text-[20px] font-semibold text-[#050316] tracking-tight">{scenario.metrics.liquidity}</p>
        </div>
        <div className="bg-[#fafafa] rounded-xl p-5">
          <p className="text-[12px] text-[#050316]/50 mb-2 font-medium uppercase tracking-wide">Cash Runway</p>
          <p className="text-[20px] font-semibold text-[#050316] tracking-tight">{scenario.metrics.runway}</p>
        </div>
      </div>

      {activeScenario !== 'current' && (
        <div className="mt-6 p-4 bg-[#fafafa] border border-[#e5e7eb] rounded-xl">
          <p className="text-[13px] text-[#050316]/60 leading-relaxed">
            {scenario.description} ger en betydande förbättring av likviditeten och förlänger din runway avsevärt.
          </p>
        </div>
      )}
    </div>
  )
}
