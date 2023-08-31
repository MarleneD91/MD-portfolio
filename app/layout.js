import './globals.css'

import Providers from './providers'
import ThemeSwitcher from '@/components/common/ThemeSwitcher'

//Fonts
import {Sansita, Gentium_Book_Plus, Roboto} from 'next/font/google'

const sansita = Sansita ({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  weight: ['400', '700', '800', '900'],
  variable: '--font-sansita',
})

const gentiumBookPlus = Gentium_Book_Plus ({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  weight: ['400', '700'],
  variable: '--font-gentium-book-plus',
})

const roboto = Roboto ({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Portfolio of Marlène Diaz, front web developer',
  description: 'This portfolio shows the work of Marlène Diaz, frontend web developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sansita.variable} ${gentiumBookPlus.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className='bg-white-light text-black dark:bg-green-dark dark:text-dark-mode-white'>
        <Providers>
          <ThemeSwitcher/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
