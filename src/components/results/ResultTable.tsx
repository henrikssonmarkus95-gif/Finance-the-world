import Card from '../shared/Card'

const incomeData = [
  { name: 'Rörelsens intäkter', isHeader: true },
  { name: 'Nettoomsättning', v2024: '1 362 711 kr', v2023: '38 311 kr', change: '+1 324 400 kr', percent: '+3 457%' },
  { name: 'Övriga rörelseintäkter', v2024: '40 003 kr', v2023: '189 000 kr', change: '-148 997 kr', percent: '-78.8%' },
  { name: 'Summa intäkter', v2024: '1 402 714 kr', v2023: '227 311 kr', change: '+1 175 403 kr', percent: '+517.0%', isBold: true },
  { name: 'Rörelsens kostnader', isHeader: true },
  { name: 'Råvaror och förnödenheter', v2024: '-119 150 kr', v2023: '-5 500 kr', change: '-113 650 kr', percent: '+2 066.4%' },
  { name: 'Övriga externa kostnader', v2024: '-363 041 kr', v2023: '-131 568 kr', change: '-231 473 kr', percent: '+175.9%' },
  { name: 'Personalkostnader', v2024: '-823 090 kr', v2023: '-10 180 kr', change: '-812 910 kr', percent: '+7 985.7%' },
  { name: 'Avskrivningar', v2024: '-69 840 kr', v2023: '-37 800 kr', change: '-32 040 kr', percent: '+84.8%' },
  { name: 'Summa kostnader', v2024: '-1 375 121 kr', v2023: '-185 048 kr', change: '-1 190 073 kr', percent: '+643.2%', isBold: true },
  { name: 'Rörelseresultat', v2024: '27 593 kr', v2023: '42 263 kr', change: '-14 670 kr', percent: '-34.7%', isBold: true },
  { name: 'Finansiella poster', v2024: '-7 kr', v2023: '-225 kr', change: '+218 kr', percent: '-96.9%' },
  { name: 'Resultat efter finansiella poster', v2024: '27 586 kr', v2023: '42 038 kr', change: '-14 452 kr', percent: '-34.4%', isBold: true },
  { name: 'Skatt', v2024: '-15 872 kr', v2023: '-11 069 kr', change: '-4 803 kr', percent: '+43.4%' },
  { name: 'Årets resultat', v2024: '11 714 kr', v2023: '30 969 kr', change: '-19 255 kr', percent: '-62.2%', isBold: true },
]

export default function ResultTable() {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f9faf7]">
              <th className="text-left p-3 text-[14px] font-medium text-[#050316]">Post</th>
              <th className="text-right p-3 text-[14px] font-medium text-[#050316]">2024</th>
              <th className="text-right p-3 text-[14px] font-medium text-[#050316]">2023</th>
              <th className="text-right p-3 text-[14px] font-medium text-[#050316]">Förändring</th>
              <th className="text-right p-3 text-[14px] font-medium text-[#050316]">Förändring %</th>
            </tr>
          </thead>
          <tbody>
            {incomeData.map((row, index) => (
              row.isHeader ? (
                <tr key={row.name} className="bg-[#f9faf7]">
                  <td colSpan={5} className="p-3 text-[14px] font-medium text-[#050316]">{row.name}</td>
                </tr>
              ) : (
                <tr key={row.name} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f9faf7]/50'}>
                  <td className={`p-3 text-[14px] text-[#050316] ${row.isBold ? 'font-semibold' : ''}`}>{row.name}</td>
                  <td className={`p-3 text-[14px] text-[#050316] text-right ${row.isBold ? 'font-semibold' : ''}`}>{row.v2024}</td>
                  <td className="p-3 text-[14px] text-[#050316]/60 text-right">{row.v2023}</td>
                  <td className="p-3 text-[14px] text-[#050316] text-right">{row.change}</td>
                  <td className="p-3 text-[14px] text-[#050316] text-right font-medium">{row.percent}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
