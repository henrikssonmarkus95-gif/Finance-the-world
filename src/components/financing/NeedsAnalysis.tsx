import Card from '../shared/Card'

export default function NeedsAnalysis() {
  return (
    <Card className="p-8">
      <h2 className="text-[20px] font-medium text-[#050316] mb-6">Identifierade finansieringsbehov</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-[16px] font-medium text-[#050316] mb-2">1. Likviditetsförbättring</h3>
          <p className="text-[14px] text-[#050316]/70 mb-1">
            <strong>Status:</strong> Kassa och bank har minskat från 312 395 kr (2023) till 19 391 kr (2024)
          </p>
          <p className="text-[14px] text-[#050316]/70 mb-1">
            <strong>Behov:</strong> Omedelbar likviditetstillförsel för att hantera löpande kostnader
          </p>
          <p className="text-[14px] text-[#427bf6]">
            <strong>Rekommenderad lösning:</strong> Factoring för att frigöra bundet kapital i kundfordringar
          </p>
        </div>

        <div>
          <h3 className="text-[16px] font-medium text-[#050316] mb-2">2. Rörelsekapital</h3>
          <p className="text-[14px] text-[#050316]/70 mb-1">
            <strong>Status:</strong> Negativt rörelsekapital på -5 676 kr indikerar obalans
          </p>
          <p className="text-[14px] text-[#050316]/70 mb-1">
            <strong>Behov:</strong> Stärka rörelsekapitalet för att skapa handlingsutrymme
          </p>
          <p className="text-[14px] text-[#427bf6]">
            <strong>Rekommenderad lösning:</strong> Rörelsekapitallån eller checkkredit
          </p>
        </div>

        <div>
          <h3 className="text-[16px] font-medium text-[#050316] mb-2">3. Tillväxtfinansiering</h3>
          <p className="text-[14px] text-[#050316]/70 mb-1">
            <strong>Status:</strong> Stark omsättningstillväxt (+3 457%) kräver kapital för fortsatt expansion
          </p>
          <p className="text-[14px] text-[#050316]/70 mb-1">
            <strong>Behov:</strong> Finansiering för lager, personal och utveckling
          </p>
          <p className="text-[14px] text-[#427bf6]">
            <strong>Rekommenderad lösning:</strong> Strukturerat rörelsekapitallån med längre löptid
          </p>
        </div>

        <div>
          <h3 className="text-[16px] font-medium text-[#050316] mb-2">4. Kundfordringar</h3>
          <p className="text-[14px] text-[#050316]/70 mb-1">
            <strong>Status:</strong> Kundfordringar har ökat från 9 395 kr till 252 995 kr
          </p>
          <p className="text-[14px] text-[#050316]/70 mb-1">
            <strong>Behov:</strong> Hantera kapitalbindning i utestående fakturor
          </p>
          <p className="text-[14px] text-[#427bf6]">
            <strong>Rekommenderad lösning:</strong> Factoring för att minska kredittid och öka likviditet
          </p>
        </div>

        <div className="pt-6 border-t border-[#e5e7eb]">
          <h3 className="text-[16px] font-medium text-[#050316] mb-3">Rekommenderad finansieringsstrategi</h3>
          <ol className="text-[14px] text-[#050316]/70 space-y-1 list-decimal list-inside">
            <li>Implementera factoring som primär lösning (omedelbar effekt)</li>
            <li>Komplettera med checkkredit för flexibilitet</li>
            <li>Överväg rörelsekapitallån för långsiktig stabilitet</li>
            <li>Kontinuerlig uppföljning av kassaflöde och likviditet</li>
          </ol>
        </div>
      </div>
    </Card>
  )
}
