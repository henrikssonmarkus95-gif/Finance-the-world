import { useState } from 'react'
import PageLayout from '../components/shared/PageLayout'
import PageHeader from '../components/shared/PageHeader'
import Section from '../components/shared/Section'
import StatCard from '../components/shared/StatCard'
import FilterBar from '../components/shared/FilterBar'
import MonthlyRevenueChart from '../components/dashboard/MonthlyRevenueChart'
import CostBreakdownChart from '../components/dashboard/CostBreakdownChart'
import MonthlyNetResultChart from '../components/dashboard/MonthlyNetResultChart'
import { ChartIllustration, TrendIllustration } from '../components/shared/Illustrations'

const periodOptions = [
  { value: '12m', label: '12 mån' },
  { value: '6m', label: '6 mån' },
  { value: 'ytd', label: 'YTD' },
]

export default function Dashboard() {
  const [period, setPeriod] = useState('12m')

  return (
    <PageLayout>
      {/* Header with Illustration */}
      <div className="relative">
        <div className="absolute right-0 top-0 opacity-[0.08]">
          <ChartIllustration className="w-32 h-24" />
        </div>
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
      </div>

      {/* Summary Block with colored background */}
      <div className="bg-[#050316] rounded-sm p-6 relative overflow-hidden">
        <div className="absolute right-4 top-4 opacity-20">
          <TrendIllustration className="w-24 h-12 text-white" />
        </div>
        <p className="text-[10px] text-white/50 font-semibold tracking-[0.15em] uppercase mb-3">Sammanfattning 2024</p>
        <p className="text-[14px] text-white/85 leading-relaxed max-w-2xl">
          Klippster har vuxit med <span className="font-semibold text-white">3 457%</span> i omsättning och förbättrat soliditeten
          från 16% till <span className="font-semibold text-white">50%</span>. Kassaflödet är positivt med nettomarginal på <span className="font-semibold text-white">3,9%</span>.
          Rekommendation: Överväg factoring för att frigöra 180-230 tkr i bundna kundfordringar.
        </p>
      </div>

      {/* Hero KPI - Full width accent */}
      <div className="bg-[#eef2f6] rounded-sm p-6">
        <p className="text-[10px] text-[#050316]/40 font-semibold tracking-[0.15em] uppercase mb-2">Huvudnyckeltal</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
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
      </div>

      {/* Secondary Stats - Varied sizes */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
        <div className="col-span-2">
          <StatCard
            title="Nettomarginal (13 månader)"
            value="3,9%"
            change="Gokind-data"
            changeLabel="Okt 2024 - Okt 2025"
            trend="neutral"
          />
        </div>
      </div>

      {/* Charts Section with warm background */}
      <Section title="Månatlig analys" description="Intäkter, kostnader och nettoresultat över tid" variant="muted">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3">
            <MonthlyRevenueChart />
          </div>
          <div className="lg:col-span-2">
            <CostBreakdownChart />
          </div>
        </div>
        <div className="mt-5">
          <MonthlyNetResultChart />
        </div>
      </Section>
    </PageLayout>
  )
}
