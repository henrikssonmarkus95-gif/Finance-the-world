import { ApexOptions } from 'apexcharts'
import { COLORS, formatCurrency, formatPercent } from '../data/constants'

// Base chart configuration
const baseConfig: Partial<ApexOptions> = {
  chart: {
    toolbar: { show: false },
    fontFamily: 'Inter, sans-serif',
  },
  grid: {
    borderColor: COLORS.border,
    strokeDashArray: 4,
  },
}

// Line chart configuration
export const createLineChartOptions = (
  categories: readonly string[] | string[],
  color: string = COLORS.primary
): ApexOptions => ({
  ...baseConfig,
  chart: {
    ...baseConfig.chart,
    type: 'line',
    height: 300,
  },
  stroke: {
    curve: 'smooth',
    width: 3,
    colors: [color],
  },
  markers: {
    size: 5,
    colors: [color],
    strokeColors: COLORS.white,
    strokeWidth: 2,
  },
  grid: baseConfig.grid,
  xaxis: {
    categories: categories as string[],
    labels: {
      style: { colors: COLORS.text, fontSize: '12px' },
    },
  },
  yaxis: {
    labels: {
      formatter: formatCurrency,
      style: { colors: COLORS.text, fontSize: '12px' },
    },
  },
  tooltip: {
    y: { formatter: formatCurrency },
  },
})

// Area chart configuration
export const createAreaChartOptions = (
  categories: readonly string[] | string[],
  color: string = COLORS.primary
): ApexOptions => ({
  ...baseConfig,
  chart: {
    ...baseConfig.chart,
    type: 'area',
    height: 300,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
    colors: [color],
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  colors: [color],
  grid: baseConfig.grid,
  xaxis: {
    categories: categories as string[],
    labels: {
      style: { colors: COLORS.text, fontSize: '12px' },
    },
  },
  yaxis: {
    labels: {
      formatter: formatCurrency,
      style: { colors: COLORS.text, fontSize: '12px' },
    },
  },
  tooltip: {
    y: { formatter: formatCurrency },
  },
})

// Donut chart configuration
export const createDonutChartOptions = (
  labels: string[],
  colors: string[] = [],
  totalLabel?: string,
  totalValue?: string
): ApexOptions => ({
  chart: {
    type: 'donut',
    height: 320,
    fontFamily: 'Inter, sans-serif',
  },
  colors: colors.length ? colors : [COLORS.primary, COLORS.primaryLight, COLORS.primaryLighter],
  labels,
  legend: {
    position: 'bottom',
    fontSize: '12px',
  },
  dataLabels: {
    enabled: true,
    formatter: (val: number) => formatPercent(val),
    style: {
      fontSize: '12px',
      colors: [COLORS.white],
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        labels: {
          show: !!totalLabel,
          total: {
            show: !!totalLabel,
            label: totalLabel || '',
            formatter: () => totalValue || '',
          },
        },
      },
    },
  },
  tooltip: {
    y: { formatter: formatCurrency },
  },
})

// Bar chart configuration
export const createBarChartOptions = (
  categories: readonly string[] | string[],
  colors: string[] = [COLORS.primary],
  horizontal: boolean = false
): ApexOptions => ({
  ...baseConfig,
  chart: {
    ...baseConfig.chart,
    type: 'bar',
    height: 300,
  },
  colors,
  plotOptions: {
    bar: {
      horizontal,
      borderRadius: 4,
      columnWidth: '60%',
    },
  },
  grid: baseConfig.grid,
  xaxis: {
    categories: categories as string[],
    labels: {
      style: { colors: COLORS.text, fontSize: '12px' },
    },
  },
  yaxis: {
    labels: {
      formatter: formatCurrency,
      style: { colors: COLORS.text, fontSize: '12px' },
    },
  },
  tooltip: {
    y: { formatter: formatCurrency },
  },
  dataLabels: {
    enabled: false,
  },
})

// Radar chart configuration
export const createRadarChartOptions = (
  categories: string[],
  colors: string[] = [COLORS.primary, COLORS.primaryLight]
): ApexOptions => ({
  chart: {
    type: 'radar',
    height: 400,
    toolbar: { show: false },
    fontFamily: 'Inter, sans-serif',
  },
  colors,
  stroke: {
    width: 2,
  },
  fill: {
    opacity: 0.2,
  },
  markers: {
    size: 4,
  },
  xaxis: {
    categories,
    labels: {
      style: { colors: COLORS.text, fontSize: '12px' },
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    position: 'bottom',
    fontSize: '12px',
  },
})
