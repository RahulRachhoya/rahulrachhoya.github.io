/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          subtle: 'rgba(99, 102, 241, 0.1)',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          subtle: 'rgba(139, 92, 246, 0.1)',
        },
        surface: {
          base: '#FAFAFA',
          elevated: '#FFFFFF',
        },
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#94A3B8',
          muted: '#CBD5E1',
        },
        border: {
          DEFAULT: '#E2E8F0',
          hover: '#CBD5E1',
        },
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
        'hover': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
