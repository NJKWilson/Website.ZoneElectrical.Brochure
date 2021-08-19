module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        TimesNewRoman: ['Times New Roman', 'sans-serif'],
      },
      colors: {
        'zone': {
          DEFAULT: '#9ED522',
          '50': '#F3FAE2',
          '100': '#EAF7CC',
          '200': '#D7F0A0',
          '300': '#C5E974',
          '400': '#B3E248',
          '500': '#9ED522',
          '600': '#7DA91B',
          '700': '#5D7D14',
          '800': '#3C510D',
          '900': '#1C2506'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}