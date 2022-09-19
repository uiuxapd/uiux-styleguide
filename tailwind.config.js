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
          50: '#CCDDFA',
          100: '#AAC7F7',
          200: '#80ABF3',
          300: '#558FEF',
          400: '#2B73EB',
          500: '#0057E7',
          600: '#0049C0',
          700: '#003A9A',
          800: '#002C74',
          900: '#001D4D',
        },

        secondary: {
          50: '#FFF1CC',
          100: '#FFE7AA',
          200: '#FFDB80',
          300: '#FFCF55',
          400: '#FFC32B',
          500: '#D49800',
          600: '#AA7A00',
          700: '#805C00',
          800: '#553D00',
          900: '#332500',
        },

        success: {
          50: '#CFF1E6',
          100: '#AFE8D5',
          200: '#87DCC0',
          300: '#60D0AB',
          400: '#38C596',
          500: '#0D9A6C',
          600: '#0B7B56',
          700: '#085D41',
          800: '#053E2B',
          900: '#03251A',
        },

        error: {
          50: '#FACCCC',
          100: '#F7AAAA',
          200: '#F38080',
          300: '#EF5555',
          400: '#EB2B2B',
          500: '#E70000',
          600: '#C00000',
          700: '#9A0000',
          800: '#740000',
          900: '#4D0000',
        },
      }
    },
  },
  plugins: [],
}
