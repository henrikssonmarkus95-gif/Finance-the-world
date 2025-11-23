interface LiquidityCardProps {
  title: string
  value: string
  comparison?: string
  change?: string
  comment: string
}

function LiquidityCard({ title, value, comparison, change, comment }: LiquidityCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg p-5 shadow-sm">
      <p className="text-[14px] text-[#050316]/60 mb-2">{title}</p>
      <p className="text-[24px] font-semibold text-[#050316] mb-2">{value}</p>
      {comparison && (
        <p className="text-[12px] text-[#050316]/60">{comparison}</p>
      )}
      {change && (
        <p className="text-[14px] font-medium text-[#050316] mt-1">{change}</p>
      )}
      <p className="text-[12px] text-[#050316]/60 mt-2 pt-2 border-t border-[#e5e7eb]">
        {comment}
      </p>
    </div>
  )
}

export default function LiquidityCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <LiquidityCard
        title="Rörelsekapital"
        value="-5 676 kr"
        comment="Negativt rörelsekapital indikerar behov av finansiering"
      />
      <LiquidityCard
        title="Kassa och bank"
        value="19 391 kr"
        comparison="vs 2023: 312 395 kr"
        change="-293 004 kr"
        comment="Betydande likviditetsminskning"
      />
      <LiquidityCard
        title="Kundfordringar"
        value="252 995 kr"
        comparison="vs 2023: 9 395 kr"
        change="+243 600 kr"
        comment="Ökning indikerar tillväxt men bundet kapital"
      />
      <LiquidityCard
        title="Kortfristiga skulder"
        value="342 789 kr"
        comparison="vs 2023: 420 447 kr"
        change="-77 658 kr"
        comment="Minskning av kortfristiga åtaganden"
      />
    </div>
  )
}
