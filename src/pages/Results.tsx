import PageLayout from '../components/shared/PageLayout'
import PageHeader from '../components/shared/PageHeader'
import Section from '../components/shared/Section'
import StatCard from '../components/shared/StatCard'
import ResultTable from '../components/results/ResultTable'
import CostDevelopmentChart from '../components/results/CostDevelopmentChart'

export default function Results() {
  return (
    <PageLayout>
      <PageHeader
        title="Resultat & Vinst"
        description="Resultaträkningsanalys med kostnadsnedbrytning"
      />

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Summa intäkter"
          value="1 402 714 kr"
          change="+517%"
          changeLabel="vs 2023"
          trend="up"
        />
        <StatCard
          title="Summa kostnader"
          value="-1 375 121 kr"
          change="+643%"
          changeLabel="vs 2023"
          trend="down"
        />
        <StatCard
          title="Rörelseresultat"
          value="27 593 kr"
          change="-34,7%"
          changeLabel="vs 2023"
          trend="down"
        />
        <StatCard
          title="Rörelsemarginal"
          value="2,0%"
          change="-108 pp"
          changeLabel="vs 110,3%"
          trend="down"
        />
      </div>

      {/* Table and Chart */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Section title="Resultaträkning" description="Fullständig resultaträkning 2024 vs 2023">
          <ResultTable />
        </Section>
        <CostDevelopmentChart />
      </div>
    </PageLayout>
  )
}
