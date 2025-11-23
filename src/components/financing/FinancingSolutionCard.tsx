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
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-6">
      <div className="mb-4">
        <h3 className="text-[18px] font-semibold text-[#050316] tracking-tight">{provider}</h3>
        <p className="text-[14px] text-[#050316]/60 font-medium">{productType}</p>
      </div>

      <p className="text-[14px] text-[#050316]/60 mb-5 leading-relaxed">{description}</p>

      <div className="mb-5">
        <p className="text-[12px] text-[#050316]/50 mb-1 font-medium uppercase tracking-wide">Finansieringsbelopp</p>
        <p className="text-[14px] font-medium text-[#050316]">{amount}</p>
      </div>

      <div className="mb-5">
        <p className="text-[12px] text-[#050316]/50 mb-2 font-medium uppercase tracking-wide">Fördelar</p>
        <ul className="text-[13px] text-[#050316]/60 space-y-1.5 leading-relaxed">
          {advantages.map((adv, i) => (
            <li key={i}>{adv}</li>
          ))}
        </ul>
      </div>

      <div className="pt-5 border-t border-[#e5e7eb]">
        <p className="text-[12px] text-[#050316]/50 mb-1 font-medium uppercase tracking-wide">Lämplig för</p>
        <p className="text-[14px] text-[#050316]">{suitableFor}</p>
      </div>
    </div>
  )
}
