/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#FAD4C0',
        'primary-foreground': '#1C293C',
        secondary: '#80A1C1',
        'secondary-foreground': '#FFFFFF',
        surface: {
          base: '#FFF5E6',
          elevated: '#FFFFFF',
          overlay: 'rgba(255, 255, 255, 0.85)',
        },
        text: {
          primary: '#141414',
          secondary: '#3A344E',
          tertiary: '#6B7280',
          muted: '#9CA3AF',
        },
        border: {
          soft: 'rgba(0, 0, 0, 0.06)',
          medium: 'rgba(0, 0, 0, 0.12)',
          strong: 'rgba(0, 0, 0, 0.2)',
        },
      },
      borderRadius: {
        'bento': '24px',
        'bento-sm': '16px',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '24px',
        '6': '32px',
        '7': '48px',
        '8': '64px',
        '9': '96px',
      },
    },
  },
  plugins: [],
}
