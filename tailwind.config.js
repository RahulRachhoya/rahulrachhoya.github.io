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
        primary: '#6366f1',
        'primary-foreground': '#ffffff',
        secondary: '#a855f7',
        'secondary-foreground': '#ffffff',
        surface: {
          base: '#0a0a0a',
          elevated: '#141414',
          overlay: 'rgba(20, 20, 20, 0.85)',
        },
        text: {
          primary: '#ffffff',
          secondary: '#e5e7eb',
          tertiary: '#9ca3af',
          muted: '#6b7280',
        },
        border: {
          soft: 'rgba(255, 255, 255, 0.06)',
          medium: 'rgba(255, 255, 255, 0.12)',
          strong: 'rgba(255, 255, 255, 0.2)',
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
