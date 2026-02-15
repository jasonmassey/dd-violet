/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: { DEFAULT: '#0a0a0a', raised: '#141414', border: '#2a2a2a' },
        accent: { DEFAULT: '#059669', light: '#10b981', dim: '#065f46' },
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
