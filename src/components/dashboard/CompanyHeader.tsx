import Card from '../shared/Card'

export default function CompanyHeader() {
  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-[24px] font-semibold text-[#050316]">
            Klippster
          </h2>
          <p className="text-[14px] text-[#050316]/60">
            Dagligvaruklipp i Sverige AB
          </p>
          <p className="text-[12px] text-[#050316]/60 mt-1">
            Org.nr: 559425-2511
          </p>
        </div>
        <div className="text-right">
          <p className="text-[12px] text-[#050316]/60">
            Period: 2024-01-01 till 2024-12-31
          </p>
          <p className="text-[14px] text-[#050316] mt-1">
            Status: <span className="font-medium">Aktiv</span>
          </p>
        </div>
      </div>
    </Card>
  )
}
