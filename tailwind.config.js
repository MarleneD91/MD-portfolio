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
        'green-light' : '#BDD2C6',
        'white-light' : '#FDF8FA',
        'purple-dark' : '#232127',
        'green-dark' : '#303430',
        'footer-txt': '#353535',
        'grey-txt' : '#2D2626'
      },
      fontFamily: {
        sansita: ['var(--font-sansita)'],
        gentium: ['var(--font-gentium-book-plus)'],
        roboto: ['var(--font-roboto)']
      }
    },
 
  },
  plugins: [],
}
