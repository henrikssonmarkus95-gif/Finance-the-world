import { ApexOptions } from 'apexcharts'

export const chartColors = {
  primary: '#427bf6',
  secondary: '#050316',
  tertiary: '#6b95ff',
  quaternary: '#94b3ff',
  background: '#f9faf7',
  border: '#e5e7eb',
  text: '#050316',
  textMuted: 'rgba(5, 3, 22, 0.6)',
}

export const baseChartOptions: ApexOptions = {
  chart: {
    fontFamily: 'Inter, system-ui, sans-serif',
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  colors: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary],
  grid: {
    borderColor: chartColors.border,
    strokeDashArray: 4,
    padding: { left: 8, right: 8 },
  },
  xaxis: {
    labels: {
      style: { colors: chartColors.textMuted, fontSize: '11px' },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      style: { colors: chartColors.textMuted, fontSize: '11px' },
    },
  },
  legend: {
    fontSize: '12px',
    fontWeight: 500,
    labels: { colors: chartColors.text },
    markers: { size: 4 },
  },
  tooltip: {
    theme: 'light',
    style: { fontSize: '12px' },
  },
  dataLabels: {
    style: { fontSize: '11px', fontWeight: 500 },
  },
}

export const formatCurrency = (value: number): string => {
  return value.toLocaleString('sv-SE') + ' kr'
}

export const formatPercent = (value: number): string => {
  return value.toFixed(1) + '%'
}
