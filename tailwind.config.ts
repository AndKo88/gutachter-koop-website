import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#1a2f4a',
          900: '#0a1628',
          950: '#060e1a',
        },
        accent: {
          DEFAULT: '#e8b630',
          50: '#fef9e7',
          100: '#fdf0c3',
          200: '#fbe49a',
          300: '#f5d060',
          400: '#e8b630',
          500: '#d4a020',
          600: '#b8841a',
          700: '#946618',
          800: '#7a521a',
          900: '#68441c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
