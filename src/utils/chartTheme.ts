import { ApexOptions } from 'apexcharts'

export const chartColors = {
  primary: '#050316',
  secondary: '#4a5568',
  tertiary: '#a0aec0',
  quaternary: '#e2e8f0',
  accent: '#1a1a2e',
  background: '#f8f9fa',
  border: '#e2e4e9',
  text: '#050316',
  textMuted: 'rgba(5, 3, 22, 0.4)',
}

export const baseChartOptions: ApexOptions = {
  chart: {
    fontFamily: 'Inter, system-ui, sans-serif',
    toolbar: { show: false },
    zoom: { enabled: false },
    animations: {
      enabled: true,
      speed: 400,
    },
  },
  colors: [chartColors.primary, chartColors.secondary, chartColors.tertiary, chartColors.quaternary],
  stroke: {
    width: 2.5,
    curve: 'smooth',
  },
  markers: {
    size: 5,
    strokeWidth: 0,
    hover: { size: 7 },
  },
  grid: {
    borderColor: chartColors.border,
    strokeDashArray: 0,
    padding: { left: 12, right: 12, top: 0, bottom: 0 },
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } },
  },
  xaxis: {
    labels: {
      style: {
        colors: chartColors.textMuted,
        fontSize: '10px',
        fontWeight: 500,
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      style: {
        colors: chartColors.textMuted,
        fontSize: '10px',
        fontWeight: 500,
      },
    },
  },
  legend: {
    fontSize: '11px',
    fontWeight: 600,
    labels: { colors: chartColors.text },
    markers: { size: 6, offsetX: -2 },
    itemMargin: { horizontal: 12 },
  },
  tooltip: {
    theme: 'light',
    style: { fontSize: '11px' },
    y: { formatter: (val: number) => formatCurrency(val) },
    custom: undefined,
    cssClass: 'arcim-tooltip',
  },
  dataLabels: {
    style: {
      fontSize: '10px',
      fontWeight: 600,
      colors: [chartColors.text],
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 2,
      columnWidth: '60%',
    },
  },
  fill: {
    opacity: 1,
  },
}

export const formatCurrency = (value: number): string => {
  return value.toLocaleString('sv-SE') + ' kr'
}

export const formatPercent = (value: number): string => {
  return value.toFixed(1) + '%'
}

export const formatCompact = (value: number): string => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + ' mkr'
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(0) + ' tkr'
  }
  return value.toLocaleString('sv-SE') + ' kr'
}
