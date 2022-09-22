/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        neutral:{
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#292E32',
          900: '#212529',
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
