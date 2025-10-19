import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'lilac-gradient': 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 50%, #f3e8ff 100%)',
        'button-gradient': 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
      },
      boxShadow: {
        'lilac-glow': '0 0 20px rgba(168, 85, 247, 0.3)',
        'soft-glow': '0 0 30px rgba(168, 85, 247, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
