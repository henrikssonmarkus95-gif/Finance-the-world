import PageLayout from '../components/shared/PageLayout'
import PageHeader from '../components/shared/PageHeader'
import Section from '../components/shared/Section'
import StatCard from '../components/shared/StatCard'
import WaterfallChart from '../components/cashflow/WaterfallChart'
import RevenueCostChart from '../components/cashflow/RevenueCostChart'
import CashRunway from '../components/cashflow/CashRunway'

export default function Cashflow() {
  return (
    <PageLayout>
      <PageHeader
        title="Kassaflöde"
        description="Kassaflödesanalys med månatlig uppdelning och prognoser"
      />

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard
          title="Genomsnittlig intäkt"
          value="757 799 kr"
          changeLabel="per månad"
          trend="neutral"
        />
        <StatCard
          title="Genomsnittlig kostnad"
          value="-728 031 kr"
          changeLabel="per månad"
          trend="neutral"
        />
        <StatCard
          title="Genomsnittligt netto"
          value="29 768 kr"
          changeLabel="per månad"
          trend="up"
        />
        <StatCard
          title="Bästa månad"
          value="Okt 2025"
          change="+707 772 kr"
          trend="up"
        />
        <StatCard
          title="Sämsta månad"
          value="Sep 2025"
          change="-457 734 kr"
          trend="down"
        />
      </div>

      {/* Cash Runway */}
      <CashRunway />

      {/* Charts */}
      <Section title="Kassaflödesanalys" description="Kumulativt kassaflöde och intäkter vs kostnader">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WaterfallChart />
          <RevenueCostChart />
        </div>
      </Section>
    </PageLayout>
  )
}
