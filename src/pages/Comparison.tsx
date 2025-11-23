import PageLayout from '../components/shared/PageLayout'
import PageHeader from '../components/shared/PageHeader'
import Section from '../components/shared/Section'
import InsightBox from '../components/shared/InsightBox'
import YearOverYearCards from '../components/comparison/YearOverYearCards'
import QuarterlyGrowthChart from '../components/comparison/QuarterlyGrowthChart'
import KPIDevelopmentChart from '../components/comparison/KPIDevelopmentChart'
import ComparisonTable from '../components/comparison/ComparisonTable'

export default function Comparison() {
  return (
    <PageLayout>
      <PageHeader
        title="Jämförelser"
        description="År-till-år jämförelser och historiska trender"
      />

      <InsightBox title="Kraftig tillväxt 2024" variant="highlight">
        Omsättningen ökade med 517% från 227 tkr till 1 403 tkr. Kostnaderna växte dock snabbare (+643%),
        vilket resulterade i lägre rörelsemarginal (2,0% vs 110,3%). Nyemissionen stärkte soliditeten till 50%.
      </InsightBox>

      {/* Year over Year KPI Cards */}
      <YearOverYearCards />

      {/* Charts side by side */}
      <Section title="Utveckling över tid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QuarterlyGrowthChart />
          <KPIDevelopmentChart />
        </div>
      </Section>

      {/* Full Comparison Table */}
      <Section title="Jämförelsetabell" description="Alla nyckeltal 2023 vs 2024">
        <ComparisonTable />
      </Section>
    </PageLayout>
  )
}
