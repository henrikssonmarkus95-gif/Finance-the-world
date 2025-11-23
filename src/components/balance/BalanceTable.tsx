import Card from '../shared/Card'

const balanceData = [
  { name: 'TILLGÅNGAR', isMainHeader: true },
  { name: 'Anläggningstillgångar', isHeader: true },
  { name: 'Immateriella anläggningstillgångar', v2024: '348 360 kr', v2023: '151 200 kr', change: '+197 160 kr' },
  { name: 'Summa anläggningstillgångar', v2024: '348 360 kr', v2023: '151 200 kr', change: '+197 160 kr', isBold: true },
  { name: 'Omsättningstillgångar', isHeader: true },
  { name: 'Kundfordringar', v2024: '252 995 kr', v2023: '9 395 kr', change: '+243 600 kr' },
  { name: 'Övriga fordringar', v2024: '0 kr', v2023: '28 426 kr', change: '-28 426 kr' },
  { name: 'Förutbetalda kostnader', v2024: '64 727 kr', v2023: '0 kr', change: '+64 727 kr' },
  { name: 'Kassa och bank', v2024: '19 391 kr', v2023: '312 395 kr', change: '-293 004 kr' },
  { name: 'Summa omsättningstillgångar', v2024: '337 113 kr', v2023: '350 216 kr', change: '-13 103 kr', isBold: true },
  { name: 'SUMMA TILLGÅNGAR', v2024: '685 473 kr', v2023: '501 416 kr', change: '+184 057 kr', isTotal: true },
  { name: 'EGET KAPITAL OCH SKULDER', isMainHeader: true },
  { name: 'Bundet eget kapital', isHeader: true },
  { name: 'Aktiekapital', v2024: '50 633 kr', v2023: '50 000 kr', change: '+633 kr' },
  { name: 'Fond för utvecklingsutgifter', v2024: '348 360 kr', v2023: '151 200 kr', change: '+197 160 kr' },
  { name: 'Summa bundet eget kapital', v2024: '398 993 kr', v2023: '201 200 kr', change: '+197 793 kr', isBold: true },
  { name: 'Fritt eget kapital', isHeader: true },
  { name: 'Fri överkursfond', v2024: '249 368 kr', v2023: '0 kr', change: '+249 368 kr' },
  { name: 'Balanserat resultat', v2024: '-317 391 kr', v2023: '-151 200 kr', change: '-166 191 kr' },
  { name: 'Årets resultat', v2024: '11 714 kr', v2023: '30 969 kr', change: '-19 255 kr' },
  { name: 'Summa fritt eget kapital', v2024: '-56 309 kr', v2023: '-120 231 kr', change: '+63 922 kr', isBold: true },
  { name: 'Summa eget kapital', v2024: '342 684 kr', v2023: '80 969 kr', change: '+261 715 kr', isBold: true },
  { name: 'Kortfristiga skulder', isHeader: true },
  { name: 'Leverantörsskulder', v2024: '151 824 kr', v2023: '179 820 kr', change: '-27 996 kr' },
  { name: 'Aktuella skatteskulder', v2024: '26 941 kr', v2023: '11 069 kr', change: '+15 872 kr' },
  { name: 'Övriga skulder', v2024: '160 275 kr', v2023: '89 558 kr', change: '+70 717 kr' },
  { name: 'Upplupna kostnader', v2024: '3 749 kr', v2023: '140 000 kr', change: '-136 251 kr' },
  { name: 'Summa kortfristiga skulder', v2024: '342 789 kr', v2023: '420 447 kr', change: '-77 658 kr', isBold: true },
  { name: 'SUMMA EGET KAPITAL OCH SKULDER', v2024: '685 473 kr', v2023: '501 416 kr', change: '+184 057 kr', isTotal: true },
]

export default function BalanceTable() {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f9faf7]">
              <th className="text-left p-3 text-[14px] font-medium text-[#050316]">Post</th>
              <th className="text-right p-3 text-[14px] font-medium text-[#050316]">2024-12-31</th>
              <th className="text-right p-3 text-[14px] font-medium text-[#050316]">2023-12-31</th>
              <th className="text-right p-3 text-[14px] font-medium text-[#050316]">Förändring</th>
            </tr>
          </thead>
          <tbody>
            {balanceData.map((row, index) => {
              if (row.isMainHeader) {
                return (
                  <tr key={row.name} className="bg-[#050316]">
                    <td colSpan={4} className="p-3 text-[14px] font-semibold text-white">{row.name}</td>
                  </tr>
                )
              }
              if (row.isHeader) {
                return (
                  <tr key={row.name} className="bg-[#f9faf7]">
                    <td colSpan={4} className="p-3 text-[14px] font-medium text-[#050316]">{row.name}</td>
                  </tr>
                )
              }
              if (row.isTotal) {
                return (
                  <tr key={row.name} className="bg-[#427bf6]/10">
                    <td className="p-3 text-[14px] font-bold text-[#050316]">{row.name}</td>
                    <td className="p-3 text-[14px] font-bold text-[#050316] text-right">{row.v2024}</td>
                    <td className="p-3 text-[14px] font-bold text-[#050316]/60 text-right">{row.v2023}</td>
                    <td className="p-3 text-[14px] font-bold text-[#050316] text-right">{row.change}</td>
                  </tr>
                )
              }
              return (
                <tr key={row.name} className={index % 2 === 0 ? 'bg-white' : 'bg-[#f9faf7]/50'}>
                  <td className={`p-3 text-[14px] text-[#050316] ${row.isBold ? 'font-semibold' : ''}`}>{row.name}</td>
                  <td className={`p-3 text-[14px] text-[#050316] text-right ${row.isBold ? 'font-semibold' : ''}`}>{row.v2024}</td>
                  <td className="p-3 text-[14px] text-[#050316]/60 text-right">{row.v2023}</td>
                  <td className="p-3 text-[14px] text-[#050316] text-right">{row.change}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
