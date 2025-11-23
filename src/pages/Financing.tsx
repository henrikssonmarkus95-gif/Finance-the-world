import PageLayout from '../components/shared/PageLayout'
import PageHeader from '../components/shared/PageHeader'
import Section from '../components/shared/Section'
import InsightBox from '../components/shared/InsightBox'
import RecommendedSolution from '../components/financing/RecommendedSolution'
import FinancingSolutionCard from '../components/financing/FinancingSolutionCard'
import FinancingComparisonTable from '../components/financing/FinancingComparisonTable'
import NeedsAnalysis from '../components/financing/NeedsAnalysis'
import ScenarioView from '../components/financing/ScenarioView'

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
    <PageLayout>
      <PageHeader
        title="Finansieringslösningar"
        description="Rekommenderade finansieringsprodukter baserat på företagets situation"
      />

      <InsightBox title="Akut likviditetsbehov" variant="warning">
        Med nuvarande kassa på 19 391 kr och burn rate på ~30 000 kr/mån når ni kassaproblem inom 1 månad.
        Factoring rekommenderas starkt för att frigöra kapital från era kundfordringar på 244 tkr.
      </InsightBox>

      {/* Scenario Analysis */}
      <ScenarioView />

      {/* Recommended Solution Highlight */}
      <RecommendedSolution />

      {/* Solution Cards Grid */}
      <Section title="Finansieringsalternativ" description="Utvalda produkter som passar Klippsters situation">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((solution) => (
            <FinancingSolutionCard key={solution.provider} {...solution} />
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section title="Jämförelse" description="Detaljerad jämförelse av finansieringsalternativ">
        <FinancingComparisonTable />
      </Section>

      {/* Needs Analysis */}
      <NeedsAnalysis />
    </PageLayout>
  )
}
