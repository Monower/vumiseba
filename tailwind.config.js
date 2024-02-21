/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    /* flow bite */
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        '10': '0.625em',
        '12': '0.75em',
        '13': '0.8125em',
        '14': '0.875em',
        '15': '0.9375em',
        '16': '1em',
        '18': '1.125em',
        '20': '1.25em',
        '24': '1.5em',
        '26': '1.625em',
        '28':  '1.75em',
        '32': '2em',
        '36': '2.25em',
        '40': '2.5em',
        '44': '2.75em',
        '48': '3em'
      },
      colors: {
        green1: '#017F28',
        yellow1: '#EEBA00',
        r1: '#FF5C00',
        s1: '#0090BE',
        p1: '#B7008F',
        y2: '#FFC700',
        g1: '#D9D9D9',
        b1: '#00C1FF',
        g2: '#E8F6DE',
        y3: '#FAFF0033',
        p1: '#B7008F',
        b2: '#DFEEFF',
        m1: '#F9D8D6',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}