interface FilterOption {
  value: string
  label: string
}

interface FilterBarProps {
  options: FilterOption[]
  value: string
  onChange: (value: string) => void
  label?: string
}

export default function FilterBar({ options, value, onChange, label }: FilterBarProps) {
  return (
    <div className="flex items-center gap-3">
      {label && (
        <span className="text-[11px] text-[#050316]/40 font-medium uppercase tracking-wide">{label}</span>
      )}
      <div className="flex border border-[#e2e4e9] rounded-sm">
        {options.map((option, index) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-3 py-1.5 text-[12px] font-medium transition-colors ${
              index > 0 ? 'border-l border-[#e2e4e9]' : ''
            } ${
              value === option.value
                ? 'bg-[#050316] text-white'
                : 'text-[#050316]/50 hover:text-[#050316] hover:bg-[#f1f3f5]'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
