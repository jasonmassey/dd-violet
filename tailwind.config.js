/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: { DEFAULT: '#0a0a0a', raised: '#141414', border: '#2a2a2a' },
        accent: { DEFAULT: '#7c3aed', light: '#a78bfa', dim: '#5b21b6' },
        text: { DEFAULT: '#e5e5e5', muted: '#737373' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
