import PageLayout from '../components/shared/PageLayout'
import PageHeader from '../components/shared/PageHeader'
import Section from '../components/shared/Section'
import StatCard from '../components/shared/StatCard'
import InsightBox from '../components/shared/InsightBox'
import BalanceTable from '../components/balance/BalanceTable'
import CapitalStructureChart from '../components/balance/CapitalStructureChart'
import AssetAllocationChart from '../components/balance/AssetAllocationChart'

export default function Balance() {
  return (
    <PageLayout>
      <PageHeader
        title="Balansräkning"
        description="Tillgångar, skulder och eget kapital i detalj"
      />

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Summa tillgångar"
          value="685 473 kr"
          change="+36,7%"
          changeLabel="vs 2023"
          trend="up"
        />
        <StatCard
          title="Eget kapital"
          value="342 684 kr"
          change="+323%"
          changeLabel="vs 2023"
          trend="up"
        />
        <StatCard
          title="Kortfristiga skulder"
          value="342 789 kr"
          change="-18,5%"
          changeLabel="vs 2023"
          trend="up"
        />
        <StatCard
          title="Soliditet"
          value="50,0%"
          change="+33,9 pp"
          changeLabel="vs 16,1%"
          trend="up"
        />
      </div>

      <InsightBox title="Kapitalstruktur" variant="highlight">
        Balansen är nu jämnt fördelad mellan eget kapital (50%) och skulder (50%).
        En nyemission under året har stärkt soliditeten betydligt. Kassa och bank
        har dock minskat kraftigt (-293 tkr) medan kundfordringarna ökat (+244 tkr).
      </InsightBox>

      {/* Balance Table */}
      <Section title="Balansräkning" description="Per 2024-12-31 jämfört med 2023-12-31">
        <BalanceTable />
      </Section>

      {/* Charts */}
      <Section title="Visualisering">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CapitalStructureChart />
          <AssetAllocationChart />
        </div>
      </Section>
    </PageLayout>
  )
}
