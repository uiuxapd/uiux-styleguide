/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        neutral:{
          50: '#F2F4F7',
          100: '#EFF1F5',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },

        primary: {
          main: '#0057E7',
          surface: '#F0F5FF',
          border: '#CCDCFF',
          hover: '#0039B2',
          pressed: '#07007D',
          focused: '#C4D5F2',
        },

        secondary: {
          main: '#FFB700',
          surface: '#FFFAF0',
          border: '#FFEFC7',
          hover: '#E5A500',
          pressed: '#A87800',
          focused:'#F7E9C4', 
        },

        success: {
          main: '#128760',
          surface: '#EDFFF9',
          border: '#C8E8DD',
          hover: '#0E6B4C',
          pressed: '#0C593F',
          focused:'#C7E9DE',
        },

        error: {
          main: '#E70000',
          surface: '#FFF5F5',
          border: '#FFD6D6',
          hover: '#BA0000',
          pressed: '#730000',
          focused:'#F2C4C4',
          
        },
      }
    },
  },
  plugins: [],
}
