import Card from '../shared/Card'

const kpiData = [
  {
    name: 'Rörelsemarginal',
    value2024: '2.0%',
    value2023: '110.3%',
    change: '-108.3 pp',
    analysis: 'Normalisering efter uppstartsfas'
  },
  {
    name: 'Avkastning totalt kapital',
    value2024: '4.1%',
    value2023: '8.4%',
    change: '-4.3 pp',
    analysis: 'Ökade tillgångar minskar relativt avkastning'
  },
  {
    name: 'Avkastning sysselsatt kapital',
    value2024: '8.1%',
    value2023: '52.2%',
    change: '-44.1 pp',
    analysis: 'Effekt av ökad kapitalbas'
  },
  {
    name: 'Avkastning eget kapital',
    value2024: '8.0%',
    value2023: '51.9%',
    change: '-43.9 pp',
    analysis: 'Nyemission ökar kapital, stabiliserar avkastning'
  },
  {
    name: 'Kassalikviditet',
    value2024: '98.3%',
    value2023: '83.3%',
    change: '+15.0 pp',
    analysis: 'Stark kortfristig betalningsförmåga'
  },
  {
    name: 'Soliditet',
    value2024: '50.0%',
    value2023: '16.1%',
    change: '+33.9 pp',
    analysis: 'Betydande förbättring av kapitalstruktur'
  }
]

export default function KPITable() {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f9faf7]">
              <th className="text-left p-3 text-[14px] font-medium text-[#050316]">Nyckeltal</th>
              <th className="text-right p-3 text-[14px] font-medium text-[#050316]">2024</th>
              <th className="text-right p-3 text-[14px] font-medium text-[#050316]">2023</th>
              <th className="text-right p-3 text-[14px] font-medium text-[#050316]">Förändring</th>
              <th className="text-left p-3 text-[14px] font-medium text-[#050316]">Analys</th>
            </tr>
          </thead>
          <tbody>
            {kpiData.map((row, index) => (
              <tr key={row.name} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f9faf7]'}>
                <td className="p-3 text-[14px] text-[#050316]">{row.name}</td>
                <td className="p-3 text-[14px] text-[#050316] text-right">{row.value2024}</td>
                <td className="p-3 text-[14px] text-[#050316]/60 text-right">{row.value2023}</td>
                <td className="p-3 text-[14px] text-[#050316] text-right font-medium">{row.change}</td>
                <td className="p-3 text-[12px] text-[#050316]/60">{row.analysis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
