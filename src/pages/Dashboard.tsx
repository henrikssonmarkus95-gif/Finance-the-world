import { useState } from 'react'
import PageLayout from '../components/shared/PageLayout'
import PageHeader from '../components/shared/PageHeader'
import Section from '../components/shared/Section'
import StatCard from '../components/shared/StatCard'
import InsightBox from '../components/shared/InsightBox'
import FilterBar from '../components/shared/FilterBar'
import MonthlyRevenueChart from '../components/dashboard/MonthlyRevenueChart'
import CostBreakdownChart from '../components/dashboard/CostBreakdownChart'
import MonthlyNetResultChart from '../components/dashboard/MonthlyNetResultChart'

const periodOptions = [
  { value: '12m', label: '12 mån' },
  { value: '6m', label: '6 mån' },
  { value: 'ytd', label: 'YTD' },
]

export default function Dashboard() {
  const [period, setPeriod] = useState('12m')

  return (
    <PageLayout>
      <PageHeader
        title="Dashboard"
        description="Översikt över Klippsters finansiella hälsa"
      >
        <FilterBar
          options={periodOptions}
          value={period}
          onChange={setPeriod}
          label="Period:"
        />
      </PageHeader>

      {/* Hero Stats - Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Main KPI - Larger */}
        <div className="lg:col-span-5">
          <StatCard
            title="Nettoomsättning 2024"
            value="1 362 711 kr"
            change="+3 457%"
            changeLabel="vs 2023"
            trend="up"
            accent
          />
        </div>

        {/* Secondary KPIs */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <StatCard
            title="Rörelseresultat"
            value="27 593 kr"
            change="-34,7%"
            changeLabel="vs 2023"
            trend="down"
          />
          <StatCard
            title="Soliditet"
            value="50,0%"
            change="+33,9 pp"
            changeLabel="vs 2023"
            trend="up"
          />
        </div>
      </div>

      {/* Insight Block */}
      <InsightBox title="Sammanfattning" variant="highlight">
        Klippster har vuxit med 3 457% i omsättning och förbättrat soliditeten
        från 16% till 50%. Kassaflödet är positivt med nettomarginal på 3,9%.
        Rekommendation: Överväg factoring för att frigöra 180-230 tkr i bundna kundfordringar.
      </InsightBox>

      {/* Secondary Stats - 3 column */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Kassalikviditet"
          value="98,3%"
          change="+15,0 pp"
          changeLabel="vs 2023"
          trend="up"
        />
        <StatCard
          title="Årets Resultat"
          value="11 714 kr"
          change="-62,2%"
          changeLabel="vs 2023"
          trend="down"
        />
        <StatCard
          title="Nettomarginal"
          value="3,9%"
          change="Gokind-data"
          changeLabel="13 mån"
          trend="neutral"
        />
      </div>

      {/* Charts in Muted Section */}
      <Section title="Analys" description="Intäkter, kostnader och nettoresultat över tid" variant="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <MonthlyRevenueChart />
          <CostBreakdownChart />
        </div>
        <div className="mt-5">
          <MonthlyNetResultChart />
        </div>
      </Section>
    </PageLayout>
  )
}
