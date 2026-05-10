/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel:  ['"Press Start 2P"', 'Courier New', 'monospace'],
        retro:  ['VT323', 'monospace'],
        body:   ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        rp: {
          black:       '#0D0B1E',
          deep:        '#120F2D',
          purple:      '#6B46C1',
          'purple-dark':'#44337A',
          white:       '#FFFFFF',
          light:       '#E2E8F0',
          gray:        '#A0AEC0',
          gold:        '#FFD700',
          cyan:        '#00FFFF',
          green:       '#00FF88',
          red:         '#FF4466',
          pink:        '#FF69B4',
        },
      },
    },
  },
  plugins: [],
};
