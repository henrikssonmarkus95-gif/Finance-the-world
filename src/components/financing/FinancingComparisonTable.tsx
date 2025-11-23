import Card from '../shared/Card'

const comparisonData = [
  {
    solution: 'Factoring (Danske Bank)',
    amount: 'Upp till 100% av fakturor',
    cost: '2-4% per faktura',
    time: '1-2 bankdagar',
    bestFor: 'Frigöra bundet kapital'
  },
  {
    solution: 'Factoring (Norion)',
    amount: 'Fullt fakturavärde',
    cost: '2-4% per faktura',
    time: '1-2 bankdagar',
    bestFor: 'Växande kundstock'
  },
  {
    solution: 'Factoring (SEK)',
    amount: 'Anpassat',
    cost: '2-4% per faktura',
    time: 'Enligt avtal',
    bestFor: 'Export/större kunder'
  },
  {
    solution: 'Rörelsekapitallån (Kameo)',
    amount: 'Upp till 60 mkr',
    cost: 'Individuell ränta',
    time: '2 bankdagar',
    bestFor: 'Flexibel tillväxtfinansiering'
  },
  {
    solution: 'Rörelsekapitallån (DBT)',
    amount: '3-35 mkr',
    cost: 'Individuell ränta',
    time: 'Några veckor',
    bestFor: 'Strukturerad långsiktig finansiering'
  },
  {
    solution: 'Checkkredit (Swedbank)',
    amount: 'Individuell',
    cost: 'Ränta på utnyttjat',
    time: 'Omedelbar vid avtal',
    bestFor: 'Kortsiktig likviditet'
  },
]

export default function FinancingComparisonTable() {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f9faf7]">
              <th className="text-left p-3 text-[14px] font-medium text-[#050316]">Lösning</th>
              <th className="text-left p-3 text-[14px] font-medium text-[#050316]">Belopp</th>
              <th className="text-left p-3 text-[14px] font-medium text-[#050316]">Kostnad</th>
              <th className="text-left p-3 text-[14px] font-medium text-[#050316]">Tid till utbetalning</th>
              <th className="text-left p-3 text-[14px] font-medium text-[#050316]">Bäst för</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={row.solution} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f9faf7]'}>
                <td className="p-3 text-[14px] font-medium text-[#050316]">{row.solution}</td>
                <td className="p-3 text-[14px] text-[#050316]">{row.amount}</td>
                <td className="p-3 text-[14px] text-[#050316]">{row.cost}</td>
                <td className="p-3 text-[14px] text-[#050316]">{row.time}</td>
                <td className="p-3 text-[14px] text-[#050316]/70">{row.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
