interface SolutionCardProps {
  provider: string
  productType: string
  description: string
  amount: string
  advantages: string[]
  suitableFor: string
}

export default function FinancingSolutionCard({
  provider,
  productType,
  description,
  amount,
  advantages,
  suitableFor
}: SolutionCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-[18px] font-semibold text-[#050316]">{provider}</h3>
        <p className="text-[14px] text-[#427bf6] font-medium">{productType}</p>
      </div>

      <p className="text-[14px] text-[#050316]/70 mb-4">{description}</p>

      <div className="mb-4">
        <p className="text-[12px] text-[#050316]/60">Finansieringsbelopp</p>
        <p className="text-[14px] font-medium text-[#050316]">{amount}</p>
      </div>

      <div className="mb-4">
        <p className="text-[12px] text-[#050316]/60 mb-2">Fördelar</p>
        <ul className="text-[12px] text-[#050316]/70 space-y-1">
          {advantages.map((adv, i) => (
            <li key={i}>• {adv}</li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-[#e5e7eb]">
        <p className="text-[12px] text-[#050316]/60">Lämplig för</p>
        <p className="text-[14px] text-[#050316]">{suitableFor}</p>
      </div>
    </div>
  )
}
