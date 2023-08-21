import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

import HomeAnimatedText from '@/components/home/HomeAnimatedText'

import Cactus from '@/public/images/Cactus.png'
import Magnolia from '@/public/images/Magnolia.png'
import ThemeImg from '@/components/common/ThemeImg'

export default function Home() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header/>
        <main >
          <div className='flex flex-col items-center justify-between'>
            <HomeAnimatedText/>
            <div className='group relative m-5 flex justify-center'>
              <ThemeImg  LightImage={Cactus} 
                            DarkImage={Magnolia} 
                            height={320} width={320} 
                            altLight={"Cactus in a pot illustration for the plant-themed portfolio, made by MD"} 
                            altDark={"Magnolia flower illustration for the plant-themed portfolio, made by MD"}
                            sizes="(max-width: 580px) 70vw"
                            className="h-[320px] w-auto mobiles:h-auto"
                            />
              <span className="absolute bottom-0 scale-0 rounded bg-purple-dark p-1 text-[10px] font-roboto text-white group-hover:scale-100">✨ Je réalise aussi des illustrations ✨</span>
            </div>
          </div>
        </main>
      <Footer/>
    </div>
  )
}
