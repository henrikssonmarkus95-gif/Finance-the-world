export default function RecommendedSolution() {
  return (
    <div className="bg-[#427bf6]/10 border-2 border-[#427bf6] rounded-xl p-8">
      <h2 className="text-[24px] font-semibold text-[#050316] mb-4">
        Prioriterad lösning: Factoring / Fakturabelåning
      </h2>

      <p className="text-[14px] text-[#050316]/80 mb-6">
        Med tanke på Klippsters höga kundfordringar (252 995 kr) och låga likviditet
        (19 391 kr) rekommenderas factoring som primär finansieringslösning. Detta
        frigör omedelbart bundet kapital i utestående fakturor och förbättrar likviditeten
        utan att öka skuldsättningen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-[14px] font-medium text-[#050316] mb-2">Fördelar</h3>
          <ul className="text-[12px] text-[#050316]/70 space-y-1">
            <li>• Omedelbar likviditet från utestående fakturor</li>
            <li>• Förbättrad kassalikviditet</li>
            <li>• Minskat behov av extern kredittäckning</li>
            <li>• Professionell kredithantering</li>
            <li>• Skydd mot kundförluster</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[14px] font-medium text-[#050316] mb-2">Beräknad effekt</h3>
          <ul className="text-[12px] text-[#050316]/70 space-y-1">
            <li>• Frigörs kapital: ca 180 000 - 230 000 kr</li>
            <li>• Förbättrad kassalikviditet: från 98% till 150-200%</li>
            <li>• Snabbare tillgång: 1-2 bankdagar</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[14px] font-medium text-[#050316] mb-2">Kostnad</h3>
          <ul className="text-[12px] text-[#050316]/70 space-y-1">
            <li>• Factoringavgift: 0.5-2.5% av fakturavärde</li>
            <li>• Ränta: 1-3% per månad</li>
            <li>• Total kostnad: ca 2-4% per faktura</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
