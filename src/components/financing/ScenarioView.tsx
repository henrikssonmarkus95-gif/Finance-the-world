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
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
      <h3 className="text-[16px] font-medium text-[#050316] mb-2">Scenarioanalys</h3>
      <p className="text-[13px] text-[#050316]/60 mb-4">
        Jämför effekten av olika finansieringslösningar på Klippsters nyckeltal
      </p>

      {/* Scenario Tabs */}
      <div className="flex gap-2 mb-6">
        {scenarios.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveScenario(s.id)}
            className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
              activeScenario === s.id
                ? 'bg-[#427bf6] text-white shadow-md'
                : 'bg-[#f9faf7] text-[#050316]/70 hover:bg-[#e5e7eb]'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Scenario Details */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#f9faf7] rounded-xl p-4">
          <p className="text-[11px] text-[#050316]/60 mb-1">Kassa och bank</p>
          <p className="text-[18px] font-semibold text-[#050316]">{scenario.metrics.cashBalance}</p>
        </div>
        <div className="bg-[#f9faf7] rounded-xl p-4">
          <p className="text-[11px] text-[#050316]/60 mb-1">Rörelsekapital</p>
          <p className="text-[18px] font-semibold text-[#050316]">{scenario.metrics.workingCapital}</p>
        </div>
        <div className="bg-[#f9faf7] rounded-xl p-4">
          <p className="text-[11px] text-[#050316]/60 mb-1">Kassalikviditet</p>
          <p className="text-[18px] font-semibold text-[#050316]">{scenario.metrics.liquidity}</p>
        </div>
        <div className={`rounded-xl p-4 ${activeScenario === 'current' ? 'bg-amber-50' : 'bg-[#427bf6]/10'}`}>
          <p className="text-[11px] text-[#050316]/60 mb-1">Cash Runway</p>
          <p className={`text-[18px] font-semibold ${activeScenario === 'current' ? 'text-amber-700' : 'text-[#427bf6]'}`}>
            {scenario.metrics.runway}
          </p>
        </div>
      </div>

      {activeScenario !== 'current' && (
        <div className="mt-4 p-3 bg-[#427bf6]/5 border border-[#427bf6]/20 rounded-lg">
          <p className="text-[12px] text-[#050316]/70">
            <strong className="text-[#427bf6]">Rekommendation:</strong> {scenario.description} ger
            en betydande förbättring av likviditeten och förlänger din runway avsevärt.
          </p>
        </div>
      )}
    </div>
  )
}
