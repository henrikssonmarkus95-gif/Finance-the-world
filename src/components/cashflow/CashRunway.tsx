export default function CashRunway() {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-xl p-8">
      <h3 className="text-[18px] font-semibold text-[#050316] mb-2 tracking-tight">Cash Runway</h3>
      <p className="text-[14px] text-[#050316]/50 mb-6">
        Hur länge räcker kapitalet baserat på nuvarande burn rate och olika finansieringsscenarier?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-[#fafafa] rounded-xl p-5 border border-[#e5e7eb]">
          <p className="text-[12px] text-[#050316]/50 mb-2 font-medium uppercase tracking-wide">Nuvarande</p>
          <p className="text-[28px] font-semibold text-[#050316] tracking-tight">0,7 mån</p>
          <p className="text-[12px] text-[#050316]/50 mt-2">Kassa: 19 391 kr</p>
          <p className="text-[12px] text-[#050316]/50">Burn: 29 768 kr/mån</p>
        </div>

        <div className="bg-[#fafafa] rounded-xl p-5 border border-[#e5e7eb]">
          <p className="text-[12px] text-[#050316]/50 mb-2 font-medium uppercase tracking-wide">Med Factoring</p>
          <p className="text-[28px] font-semibold text-[#050316] tracking-tight">6-8 mån</p>
          <p className="text-[12px] text-[#050316]/50 mt-2">Frigör: ~200 000 kr</p>
          <p className="text-[12px] text-[#050316]/50">Total: ~219 000 kr</p>
        </div>

        <div className="bg-[#fafafa] rounded-xl p-5 border border-[#e5e7eb]">
          <p className="text-[12px] text-[#050316]/50 mb-2 font-medium uppercase tracking-wide">Factoring + Lån</p>
          <p className="text-[28px] font-semibold text-[#050316] tracking-tight">12+ mån</p>
          <p className="text-[12px] text-[#050316]/50 mt-2">Lån: 500 000 kr</p>
          <p className="text-[12px] text-[#050316]/50">Total: ~719 000 kr</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-[#fafafa] border border-[#e5e7eb] rounded-xl">
        <p className="text-[13px] text-[#050316]/60 leading-relaxed">
          Med nuvarande kassa och burn rate når ni kassaproblem inom 1 månad.
          Factoring rekommenderas starkt för att förbättra likviditeten.
        </p>
      </div>
    </div>
  )
}
