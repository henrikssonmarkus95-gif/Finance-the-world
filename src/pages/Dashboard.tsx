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

      {/* Quick Insight */}
      <InsightBox title="Sammanfattning 2024" variant="highlight">
        Klippster har vuxit med <strong>3 457%</strong> i omsättning och förbättrat soliditeten
        från 16% till <strong>50%</strong>. Kassaflödet är positivt med nettomarginal på{' '}
        <strong>3,9%</strong> de senaste 13 månaderna. Rekommendation: Överväg factoring för
        att frigöra 180-230 tkr i bundna kundfordringar.
      </InsightBox>

      {/* KPI Stats */}
      <Section title="Nyckeltal">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard
            title="Nettoomsättning 2024"
            value="1 362 711 kr"
            change="+3 457%"
            changeLabel="vs 2023"
            trend="up"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />
          <StatCard
            title="Rörelseresultat 2024"
            value="27 593 kr"
            change="-34,7%"
            changeLabel="vs 2023"
            trend="down"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
          <StatCard
            title="Soliditet"
            value="50,0%"
            change="+33,9 pp"
            changeLabel="vs 2023"
            trend="up"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />
          <StatCard
            title="Kassalikviditet"
            value="98,3%"
            change="+15,0 pp"
            changeLabel="vs 2023"
            trend="up"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatCard
            title="Årets Resultat"
            value="11 714 kr"
            change="-62,2%"
            changeLabel="vs 2023"
            trend="down"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
          />
          <StatCard
            title="Nettomarginal (13 mån)"
            value="3,9%"
            change="Gokind-data"
            changeLabel="Okt 24 - Okt 25"
            trend="neutral"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            }
          />
        </div>
      </Section>

      {/* Charts */}
      <Section title="Analys" description="Intäkter, kostnader och nettoresultat över tid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthlyRevenueChart />
          <CostBreakdownChart />
        </div>
        <div className="mt-6">
          <MonthlyNetResultChart />
        </div>
      </Section>
    </PageLayout>
  )
}
