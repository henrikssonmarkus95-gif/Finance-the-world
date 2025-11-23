export default function CashRunway() {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
      <h3 className="text-[16px] font-medium text-[#050316] mb-4">Cash Runway</h3>
      <p className="text-[13px] text-[#050316]/60 mb-6">
        Hur länge räcker kapitalet baserat på nuvarande burn rate och olika finansieringsscenarier?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#f9faf7] rounded-xl p-4 border border-[#e5e7eb]">
          <p className="text-[12px] text-[#050316]/60 mb-1">Nuvarande</p>
          <p className="text-[24px] font-semibold text-[#050316]">0,7 mån</p>
          <p className="text-[11px] text-[#050316]/50 mt-1">Kassa: 19 391 kr</p>
          <p className="text-[11px] text-[#050316]/50">Burn: 29 768 kr/mån</p>
        </div>

        <div className="bg-[#427bf6]/5 rounded-xl p-4 border border-[#427bf6]/20">
          <p className="text-[12px] text-[#427bf6] font-medium mb-1">Med Factoring</p>
          <p className="text-[24px] font-semibold text-[#050316]">6-8 mån</p>
          <p className="text-[11px] text-[#050316]/50 mt-1">Frigör: ~200 000 kr</p>
          <p className="text-[11px] text-[#050316]/50">Total: ~219 000 kr</p>
        </div>

        <div className="bg-[#f9faf7] rounded-xl p-4 border border-[#e5e7eb]">
          <p className="text-[12px] text-[#050316]/60 mb-1">Factoring + Lån</p>
          <p className="text-[24px] font-semibold text-[#050316]">12+ mån</p>
          <p className="text-[11px] text-[#050316]/50 mt-1">Lån: 500 000 kr</p>
          <p className="text-[11px] text-[#050316]/50">Total: ~719 000 kr</p>
        </div>
      </div>

      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-[12px] text-amber-800">
          <strong>Varning:</strong> Med nuvarande kassa och burn rate når ni kassaproblem inom 1 månad.
          Factoring rekommenderas starkt för att förbättra likviditeten.
        </p>
      </div>
    </div>
  )
}
