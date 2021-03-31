const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
    },
    backgroundColor: {
      primary: '#1c1a46',
      secondary: '#262450',
      tertiary: '#fab82c',
    },
    textColor: {
      white: colors.white,
      anchor: '#434080',
      'anchor-hover': '#fab82c',
    },
    fontFamily: {
      sans: ['Verdana', 'sans-serif'],
    },
    spacing: {
      grid: '980px',
    },
  },
};
