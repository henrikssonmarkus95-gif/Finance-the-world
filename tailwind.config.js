/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arcim-bg': '#f9faf7',
        'arcim-surface': '#ffffff',
        'arcim-primary': '#050316',
        'arcim-accent': '#427bf6',
        'arcim-border': '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['32px', { fontWeight: '600' }],
        'h2': ['24px', { fontWeight: '600' }],
        'h3': ['20px', { fontWeight: '500' }],
        'body': ['14px', { fontWeight: '400' }],
        'small': ['12px', { fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}
