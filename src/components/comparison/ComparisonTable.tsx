import Card from '../shared/Card'

const comparisonData = [
  { name: 'Nettoomsättning', v2024: '1 362 711 kr', v2023: '38 311 kr', change: '+3 457.0%', trend: 'Stark tillväxt' },
  { name: 'Rörelseresultat', v2024: '27 593 kr', v2023: '42 263 kr', change: '-34.7%', trend: 'Minskning' },
  { name: 'Årets resultat', v2024: '11 714 kr', v2023: '30 969 kr', change: '-62.2%', trend: 'Minskning' },
  { name: 'Rörelsemarginal', v2024: '2.0%', v2023: '110.3%', change: '-108.3 pp', trend: 'Normalisering' },
  { name: 'Avk. totalt kapital', v2024: '4.1%', v2023: '8.4%', change: '-4.3 pp', trend: 'Minskning' },
  { name: 'Avk. sysselsatt kapital', v2024: '8.1%', v2023: '52.2%', change: '-44.1 pp', trend: 'Minskning' },
  { name: 'Avk. eget kapital', v2024: '8.0%', v2023: '51.9%', change: '-43.9 pp', trend: 'Minskning' },
  { name: 'Kassalikviditet', v2024: '98.3%', v2023: '83.3%', change: '+15.0 pp', trend: 'Förbättring' },
  { name: 'Soliditet', v2024: '50.0%', v2023: '16.1%', change: '+33.9 pp', trend: 'Stark förbättring' },
  { name: 'Totala tillgångar', v2024: '685 473 kr', v2023: '501 416 kr', change: '+36.7%', trend: 'Tillväxt' },
  { name: 'Eget kapital', v2024: '342 684 kr', v2023: '80 969 kr', change: '+323.2%', trend: 'Stark tillväxt' },
  { name: 'Kortfristiga skulder', v2024: '342 789 kr', v2023: '420 447 kr', change: '-18.5%', trend: 'Minskning' },
]

export default function ComparisonTable() {
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
              <th className="text-left p-3 text-[14px] font-medium text-[#050316]">Trend</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={row.name} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f9faf7]'}>
                <td className="p-3 text-[14px] text-[#050316]">{row.name}</td>
                <td className="p-3 text-[14px] text-[#050316] text-right font-medium">{row.v2024}</td>
                <td className="p-3 text-[14px] text-[#050316]/60 text-right">{row.v2023}</td>
                <td className="p-3 text-[14px] text-[#050316] text-right">{row.change}</td>
                <td className="p-3 text-[12px] text-[#050316]/70">{row.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
