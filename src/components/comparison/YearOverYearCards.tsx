interface ComparisonCardProps {
  title: string
  value2024: string
  value2023: string
  change: string
}

function ComparisonCard({ title, value2024, value2023, change }: ComparisonCardProps) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg p-5 shadow-sm">
      <p className="text-[14px] text-[#050316]/60 mb-2">{title}</p>
      <p className="text-[24px] font-semibold text-[#050316] mb-1">{value2024}</p>
      <p className="text-[12px] text-[#050316]/60">2023: {value2023}</p>
      <p className="text-[14px] font-medium text-[#050316] mt-1">{change}</p>
    </div>
  )
}

export default function YearOverYearCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ComparisonCard
        title="Omsättning"
        value2024="1 362 711 kr"
        value2023="38 311 kr"
        change="+1 324 400 kr (+3 457.0%)"
      />
      <ComparisonCard
        title="Rörelseresultat"
        value2024="27 593 kr"
        value2023="42 263 kr"
        change="-14 670 kr (-34.7%)"
      />
      <ComparisonCard
        title="Soliditet"
        value2024="50.0%"
        value2023="16.1%"
        change="+33.9 procentenheter"
      />
      <ComparisonCard
        title="Eget kapital"
        value2024="342 684 kr"
        value2023="80 969 kr"
        change="+261 715 kr (+323.2%)"
      />
      <ComparisonCard
        title="Totala tillgångar"
        value2024="685 473 kr"
        value2023="501 416 kr"
        change="+184 057 kr (+36.7%)"
      />
      <ComparisonCard
        title="Årets resultat"
        value2024="11 714 kr"
        value2023="30 969 kr"
        change="-19 255 kr (-62.2%)"
      />
    </div>
  )
}
