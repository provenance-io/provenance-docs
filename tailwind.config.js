const defaultTheme = require('tailwindcss/defaultTheme')

/*
colors: https://www.figma.com/file/JePDx60O9FB8JD06Irf7Gu/Provenance-Style-Guide?node-id=2%3A632&t=mEB8VgcTQaf1MjWP-0
fonts: https://www.figma.com/file/JePDx60O9FB8JD06Irf7Gu/Provenance-Style-Guide?node-id=0%3A1&t=mEB8VgcTQaf1MjWP-0
*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    {
      pattern: /gap-.+|grid-cols-.+/,
      variants: ['md', 'lg'],
    },
    {
      pattern: /bg-.+|text-.+/,
    },
    {
      pattern: /border-b-gray-.+|border-b-blue-.+|border-b-\d+/,
    },
    {
      pattern: /col-span-.+/,
      variants: ['md', 'lg'],
    },
    {
      pattern: /pl-.+|pr-.+|pb-.+|pt-.+|mb-.+|mt-.+/,
      variants: ['md'],
    },
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '6rem',
      },
    },
    colors: {
      blue: {
        100: '#F2F5FD',
        200: '#DDE5F8',
        300: '#B2C5F0',
        400: '#7F9EE6',
        500: '#547DDE',
        600: '#2452BC',
        700: '#18367C',
        800: '#11275A',
        900: '#08132B',
      },
      grey: {
        100: '#F8F9FA',
        200: '#F0F2F4',
        300: '#DEE2E8',
        400: '#B6BEC9',
        500: '#8C98A6',
        600: '#5F6E81',
        700: '#3D4B5C',
        800: '#273544',
        900: '#0A1828',
      },
      gray: {
        100: '#F8F9FA',
        200: '#F0F2F4',
        300: '#DEE2E8',
        400: '#B6BEC9',
        500: '#8C98A6',
        600: '#5F6E81',
        700: '#3D4B5C',
        800: '#273544',
        900: '#0A1828',
      },
      yellow: {
        100: '#FAFCE9',
        200: '#F6FADB',
        300: '#F2F7CA',
        400: '#E9F2A6',
        500: '#D7E85F',
        600: '#BCD11F',
        700: '#90A017',
        800: '#50590D',
        900: '#141603',
      },
      pink: {
        100: '#F8EAF1',
        200: '#F1D5E3',
        300: '#E3ABC7',
        400: '#D581AB',
        500: '#C85B91',
        600: '#A83870',
        700: '#73264C',
        800: '#501B36',
        900: '#260D19',
      },
      red: {
        100: '#FFF0F3',
        200: '#FFC7D3',
        300: '#FF8FA6',
        400: '#FF577A',
        500: '#FF2451',
        600: '#EB0031',
        700: '#990020',
        800: '#6B0016',
        900: '#33000B',
      },
      neutral: {
        600: '#1A1B22',
      },
      green: {
        100: '#EDF7F7',
        200: '#D8EEED',
        300: '#B2DCDA',
        400: '#8BCBC8',
        500: '#68BBB8',
        600: '#3F8D8A',
        700: '#387D7A',
        800: '#214A48',
        900: '#102322',
      },
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
    },
    fontSize: {
      xs: ['0.75rem', '1.125rem'], //12px, 18px
      sm: ['0.875rem', '1.25rem'], //14px, 20px
      base: ['1rem', '1.5rem'], //16px, 24px
      DEFAULT: ['1rem', '1.5rem'], //16px, 24px
      lg: ['1.125rem', '1.6875rem'], // 18px, 27px
      xl: ['1.375rem', '2.0625rem'], // 22px, 33px
      '2xl': ['1.625rem', '2.4375rem'], //26px, 39px
      '3xl': ['1.875rem', '2.4375rem'], //30px, 39px
      '4xl': ['2.25rem', '2.9375rem'], //36px, 47px
      '5xl': ['2.625rem', '3.4375rem'], //42px, 55px
      '6xl': ['3.125rem', '4.0625rem'], //50px, 65px
      '7xl': ['3.625rem', '4.75rem'], //58px, 76px
      '8xl': ['4.25rem', '5.5625rem'], //68px, 89px
      '9xl': ['4.75rem', '6.175rem'], //76px, 98.8px
      '12xl': ['9rem', '11.6875rem'], //144px, 187px
    },
    extend: {
      backgroundImage: {
        'header-flare': "url('../../static/img/header-flare.svg')",
        'mid-section-flare': "url('../../static/img/mid-section-flare.png')",
      },
      backgroundSize: {
        'size-step': '42px, 48px',
      },
      boxShadow: {
        standard: '0px 4px 8px rgba(0, 0, 0, 0.25)',
        'standard-bottom-only': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      gridTemplateColumns: {
        'input-btn': '1fr 100px',
      },
      gridTemplateRows: {
        'blog-card': '1fr auto 1fr',
      },
      maxWidth: {
        page: '1440px',
      },
      translate: {
        center: '-50%, -10%',
      },
      fontFamily: {
        MaisonNeue: ['MaisonNeue', ...defaultTheme.fontFamily.sans],
        MaisonNeueExtended: [
          'MaisonNeueExtended',
          ...defaultTheme.fontFamily.sans,
        ],
        sans: [
          'MaisonNeue',
          'MaisonNeueExtended',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      animation: {
        'slide-left': 'slide-left 0.25s linear',
        'slide-right': 'slide-right 0.25s linear',
        'slide-away-right': 'slide-away-right 0.25s linear',
      },
      keyframes: {
        'slide-left': {
          '0%': { left: '100%' },
          '100%': { left: '0%' },
        },
        'slide-right': {
          '0%': { left: '-100%' },
          '100%': { left: '0%' },
        },
        'slide-away-right': {
          '0%': { left: '0%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}
