module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ['./src/**/*.vue', './src/**/*.js', './src/**/*.md', './src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        graphik: "'Graphik', serif",
      },
      spacing: {
        18: '72px',
      },
      screens: {
        xs: '375px',
      },
      zIndex: {
        '1': 1,
      },
      colors: {
        body: '#3F3F46',
        title: '#1E293B',
        subtitle: '#64748B',
        caption: '#9CA3AF',
        bodyOnDark: '#a6a6ca',
        titleOnDark: 'white',
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
          400: '#393855',
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
          100: '#f9f9fb',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
          500: '#94A3B8',
        },
      },
      boxShadow: {
        glow: '0 3px 10px rgba(51, 62, 73, 0.18), 0 6px 17px rgba(51, 62, 73, 0.18)',
        nav: 'inset 0 -3px #ff6158',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      rotate: ['group-hover'],
      display: ['group-hover'],
      ringWidth: ['hover']
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
