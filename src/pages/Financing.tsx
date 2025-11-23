import RecommendedSolution from '../components/financing/RecommendedSolution'
import FinancingSolutionCard from '../components/financing/FinancingSolutionCard'
import FinancingComparisonTable from '../components/financing/FinancingComparisonTable'
import NeedsAnalysis from '../components/financing/NeedsAnalysis'

const solutions = [
  {
    provider: 'Danske Bank Factoring',
    productType: 'Factoring (Non-recourse)',
    description: 'Danske Bank diskonterar fakturor till 100% av nominellt värde',
    amount: 'Upp till 100% av fakturavärde',
    advantages: ['Full diskontering (100%)', 'Non-recourse (banken tar kreditrisken)', 'Transparent prissättning', 'Administrativ avlastning'],
    suitableFor: 'Klippster med höga kundfordringar'
  },
  {
    provider: 'Norion Bank Factoring',
    productType: 'Invoice Factoring',
    description: 'Fakturaförsäljning för fullt värde',
    amount: 'Fullt fakturavärde',
    advantages: ['Fullvärdesfinansiering', 'Professionell kredithantering', 'Flexibel lösning'],
    suitableFor: 'Klippster med växande kundstock'
  },
  {
    provider: 'Kameo',
    productType: 'Lån till rörelsekapital',
    description: 'Flexibla företagslån med snabb handläggning',
    amount: 'Upp till 60 miljoner kr',
    advantages: ['Snabb process', 'Flexibla villkor', 'Hög maxbeloppsgräns', 'Personlig rådgivning'],
    suitableFor: 'Kapitalbehov för tillväxt och löpande verksamhet'
  },
  {
    provider: 'DBT Capital',
    productType: 'Företagslån för rörelsekapital',
    description: 'Finansiering för tillväxt och rörelsefrihet',
    amount: '3-35 miljoner kr',
    advantages: ['Komplement till bank och ägare', 'Effektiv affärsnära process', 'Långsiktig partner', 'Möjlighet till InvestEU-garanti'],
    suitableFor: 'Tillväxtföretag som behöver strukturerad finansiering'
  },
]

export default function Financing() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[32px] font-semibold text-[#050316] mb-2">Finansieringslösningar</h1>
        <p className="text-[14px] text-[#050316]/60">
          Rekommenderade finansieringsprodukter baserat på företagets situation.
        </p>
      </div>

      {/* Recommended Solution Highlight */}
      <RecommendedSolution />

      {/* Solution Cards Grid */}
      <div>
        <h2 className="text-[20px] font-medium text-[#050316] mb-4">Finansieringsalternativ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((solution) => (
            <FinancingSolutionCard key={solution.provider} {...solution} />
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div>
        <h2 className="text-[20px] font-medium text-[#050316] mb-4">Jämförelse</h2>
        <FinancingComparisonTable />
      </div>

      {/* Needs Analysis */}
      <NeedsAnalysis />
    </div>
  )
}
