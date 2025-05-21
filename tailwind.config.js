/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#000000",
        secondary: "#00DC82",
        tertiary: "#111111",
        accent: "#00DC82",
        textPrimary: "#FFFFFF",
        textSecondary: "#A1A1AA",
        cardBg: "#111111",
        cardHover: "#1A1A1A",
        borderColor: "#27272A",
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top center, var(--tw-gradient-stops))',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
} 