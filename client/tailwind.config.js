/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'picton-blue': {
        50: '#f0f7ff',
        100: '#e0eefe',
        200: '#bbdefc',
        300: '#7fc2fa',
        400: '#3da5f5',
        500: '#1289e5',
        600: '#056bc4',
        700: '#06559e',
        800: '#094883',
        900: '#0e3e6c',
        950: '#092748',
      },
      silver: {
        50: '#f7f7f7',
        100: '#ededed',
        200: '#dfdfdf',
        300: '#c8c8c8',
        400: '#bababa',
        500: '#999999',
        600: '#888888',
        700: '#7b7b7b',
        800: '#676767',
        900: '#545454',
        950: '#363636',
      },
      'international-orange': {
        50: '#fff7ec',
        100: '#ffedd3',
        200: '#ffd8a6',
        300: '#ffbb6e',
        400: '#ff9333',
        500: '#ff730c',
        600: '#f25602',
        700: '#ca4004',
        800: '#a0320c',
        900: '#812c0d',
        950: '#461304',
      },

      'piction-red': {
        100: '#ff0000',
      },
      extend: {
        backgroundImage: {
          'rainbow-gradient':
            'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
        },
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
