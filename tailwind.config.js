module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ['./src/**/*.vue', './src/**/*.js', './src/**/*.md', './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        body: '#202c4f',
        title: '#0d183a',
        icon: '#737a96',
        subtitle: '#737a96',

        primary: {
          DEFAULT: '#FF6158',
          100: '#FFF4F3',
          200: '#FFAAA6',
          300: '#FF6158',
          400: '#DC4C44',
          500: '#8E1E18',
        },
        secondary: {
          100: '#F9F9FB',
          200: '#C1C1DC',
          300: '#74749C',
          400: '#41415A',
          500: '#202C4F',
        },
        dark: {
          100: '#71717A',
          200: '#52525B',
          300: '#3F3F46',
          400: '#2E3032',
          500: '#18181B',
        },
        light: {
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
          500: '#94A3B8',
        },
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
};
