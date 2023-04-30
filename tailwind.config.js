module.exports = {
  content: ['./src/**/*.{js,md,twig,svg,html}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {
      colors: {
        'primary': {
          50: '#F3F2F8',
          100: '#E7E6F2',
          200: '#C4C0DE',
          300: '#A199CB',
          400: '#5A4DA3',
          500: '#13017C',
          600: '#110170',
          700: '#0B014A',
          800: '#090038',
          900: '#060025'
        },
      }
    },
  },
}
