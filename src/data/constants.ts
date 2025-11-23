// Theme colors
export const COLORS = {
  primary: '#427bf6',
  primaryLight: '#6b95ff',
  primaryLighter: '#94b3ff',
  primaryLightest: '#bdd0ff',
  accent: '#dce6ff',
  accentLight: '#eff4ff',
  background: '#f9faf7',
  text: '#050316',
  textMuted: '#6b7280',
  border: '#e5e7eb',
  white: '#ffffff',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
} as const

// Chart color palette
export const CHART_COLORS = [
  COLORS.primary,
  COLORS.primaryLight,
  COLORS.primaryLighter,
  COLORS.primaryLightest,
  COLORS.accent,
  COLORS.accentLight,
  COLORS.background,
]

// Month labels for 13-month period (Oct 2024 - Oct 2025)
export const MONTH_LABELS = [
  'Okt 24', 'Nov 24', 'Dec 24', 'Jan 25', 'Feb 25', 'Mar 25',
  'Apr 25', 'Maj 25', 'Jun 25', 'Jul 25', 'Aug 25', 'Sep 25', 'Okt 25'
] as const

// Quarter labels
export const QUARTER_LABELS = ['Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'] as const

// Period string
export const PERIOD_LABEL = 'Oktober 2024 - Oktober 2025'

// Currency formatter
export const formatCurrency = (value: number): string =>
  value.toLocaleString('sv-SE') + ' kr'

// Percentage formatter
export const formatPercent = (value: number): string =>
  value.toFixed(1) + '%'
