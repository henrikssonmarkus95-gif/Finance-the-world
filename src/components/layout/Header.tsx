export default function Header() {
  return (
    <header className="bg-arcim-surface border-b border-arcim-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-h2 text-arcim-primary">Klippster</h1>
          <p className="text-small text-arcim-primary/60">
            Dagligvaruklipp i Sverige AB • Org.nr: 559425-2511
          </p>
        </div>
        <div className="text-small text-arcim-primary/60">
          Period: 2024-01-01 till 2024-12-31
        </div>
      </div>
    </header>
  )
}
