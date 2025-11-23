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
        <span className="text-[13px] text-[#050316]/50">{label}</span>
      )}
      <div className="flex bg-[#fafafa] rounded-lg p-1 border border-[#e5e7eb]">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-4 py-2 text-[13px] font-medium rounded-md transition-colors ${
              value === option.value
                ? 'bg-[#050316] text-white'
                : 'text-[#050316]/60 hover:text-[#050316]'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
