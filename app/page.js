import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

import HomeAnimatedText from '@/components/home/HomeAnimatedText'

import Image from 'next/image'
import Cactus from '@/public/images/Cactus.png'
import Magnolia from '@/public/images/Magnolia.png'

export default function Home() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header/>
        <main >
          <div className='flex flex-col items-center justify-between'>
            <HomeAnimatedText/>
            <div className='group relative m-5 flex justify-center'>
              <Image src={Cactus} height={320} width={320} alt='Cactus in a pot illustration for the plant-themed portfolio, made by MD' className="w-auto dark:hidden h-[320px]" priority={true}/>
              <Image src={Magnolia} height={320} width={320} alt='Magnolia flower illustration for the plant-themed portfolio, made by MD' className="w-auto hidden dark:block h-[320px]" priority={true}/>
              <span className="absolute bottom-0 scale-0 rounded bg-purple-dark p-1 text-[10px] font-roboto text-white group-hover:scale-100">✨ Je réalise aussi des illustrations ✨</span>
            </div>
          </div>
        </main>
      <Footer/>
    </div>
  )
}
