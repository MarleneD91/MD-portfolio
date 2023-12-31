/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-light':'#BDD2C6',
        'white-light':'#FDF8FA',
        'purple-dark':'#232127',
        'green-dark':'#303430',
        'light-footer-txt':'#353535',
        'dark-footer-txt':'#dedede',
        'gray-txt' : '#2D2626',
        'light-gray-form':'#EFECEC',
        'dark-gray-form':'#424145',
        'dark-blue-form':'#2D2A33',
        'carousel-dot':'#636565',
        'carousel-light-dot':'#BBB9B9',
        'dark-mode-white':'#ededed',
        'switcher-sun-bg':'#484545',
        'switcher-moon-bg':'#BBB9B9',
        'switcher-button-white':'#EBE6F9',
        'moon':"#0C0B2E",
        'sun':'#DCB839'
      },
      fontFamily: {
        sansita: ['var(--font-sansita)'],
        gentium: ['var(--font-gentium-book-plus)'],
        roboto: ['var(--font-roboto)']
      },
      screens: {
        'mobile-sm': {'min' : '320px', 'max' : '380px'},
        'mobile': {'min': '381px', 'max' : '580px'},
        'tablet': {'min': '581px', 'max' : '767px'},
        'sm-devices': {'max': '880px'},
        'mobiles': {'max': '580px'},
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
