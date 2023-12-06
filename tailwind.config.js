/** @type {import('tailwindcss').Config ,} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      

      keyframes:{
        'op': {
          '0%, 100%': { opacity:0 },
          '10%': { opacity:1 },
          '90%':{opacity:1}
        },
        'op1':{
          '0%':{opacity:0},
          '10%':{opacity:1},
          '100%':{opacity:1}
        }
      },

      fontSize:{
        'xss':['5px'],
        'xsss':['8px'],
        'x4s':['10px'],
        'x5s':['12px'],
        'x6s':['14px']
      },
      fontFamily:{
        'popins':['popins'],
        'popins2': ['popins2'],
        'popins3':['popins3'],
        'popins4':['popins4'],
        'popins5':['popins5'],
        'number':['number']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
