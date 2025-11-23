import PageLayout from '../components/shared/PageLayout'
import PageHeader from '../components/shared/PageHeader'
import Section from '../components/shared/Section'
import InsightBox from '../components/shared/InsightBox'
import KPIRadarChart from '../components/kpi/KPIRadarChart'
import KPITable from '../components/kpi/KPITable'
import LiquidityCards from '../components/kpi/LiquidityCards'

export default function KPI() {
  return (
    <PageLayout>
      <PageHeader
        title="Nyckeltal"
        description="Detaljerad analys av finansiella nyckeltal med jämförelser"
      />

      <InsightBox title="Analys" variant="default">
        Soliditeten har förbättrats kraftigt från 16% till <strong>50%</strong> tack vare nyemission.
        Kassalikviditeten är stark på 98%, men rörelsekapitalet är negativt (-5 676 kr) vilket
        indikerar behov av kortfristig finansiering.
      </InsightBox>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <KPIRadarChart />
        <Section title="Detaljerad nyckeltalstabell">
          <KPITable />
        </Section>
      </div>

      <Section title="Likviditetsanalys" description="Rörelsekapital och betalningsförmåga">
        <LiquidityCards />
      </Section>
    </PageLayout>
  )
}
