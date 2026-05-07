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
        /* Semantic mapping to CSS variables */
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'background-elevated': 'var(--background-elevated)',
        'background-card': 'var(--background-card)',
        'foreground-muted': 'var(--foreground-muted)',
        'foreground-subtle': 'var(--foreground-subtle)',
        'foreground-dimmed': 'var(--foreground-dimmed)',
        
        /* Accent colors */
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
          cyan: 'var(--accent-cyan)',
          emerald: 'var(--accent-emerald)',
          rose: 'var(--accent-rose)',
        },
        
        /* shadcn compatibility */
        border: 'hsl(var(--border-hsl))',
        input: 'hsl(var(--input-hsl))',
        ring: 'hsl(var(--ring-hsl))',
        primary: {
          DEFAULT: 'hsl(var(--primary-hsl))',
          foreground: 'hsl(var(--primary-foreground-hsl))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary-hsl))',
          foreground: 'hsl(var(--secondary-foreground-hsl))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted-hsl))',
          foreground: 'hsl(var(--muted-foreground-hsl))',
        },
        card: {
          DEFAULT: 'hsl(var(--card-hsl))',
          foreground: 'hsl(var(--card-foreground-hsl))',
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '7': 'var(--space-7)',
        '8': 'var(--space-8)',
        '9': 'var(--space-9)',
        '10': 'var(--space-10)',
        '11': 'var(--space-11)',
        '12': 'var(--space-12)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'glow': 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        'out': 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)',
      },
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
      },
    },
  },
  plugins: [],
}
