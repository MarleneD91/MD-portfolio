//Common
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

//main Components
import HomeAnimatedText from '@/components/home/HomeAnimatedText'
import ThemeImg from '@/components/common/ThemeImg'

//head
import Head from 'next/head'

//Illustrations
import Cactus from '@/public/images/Cactus.webp'
import Magnolia from '@/public/images/Magnolia.webp'


export const metadata = {
  title: 'Marlène DIAZ || FrontEnd développeuse',
  description: "Vous cherchez une développeuse web front avec un brin de créativité ? N'hésitez pas à me contacter!",
}

export default function Home() {
  return (
    <>
      <Head>
        <title> Marlène Diaz || Développeuse FrontEnd </title>
        <meta name="description" content=" Vous cherchez une développeuse web front avec un brin de créativité ? N'hésitez pas à me contacter!"></meta>
        <meta name="google-site-verification" content="QJLvHDUn9e77IFuIaN60HBmwMIz9ov5lCq0fxPGAlaI" />
      </Head>
      <div className='flex flex-col h-screen justify-between'>
        <Header/>
          <main className="w-screen" >
            <div className='flex flex-col items-center justify-between'>
              <HomeAnimatedText/>
              <div className='group relative m-5 flex justify-center'>
                <ThemeImg  LightImage={Cactus} 
                              DarkImage={Magnolia} 
                              height={320} width={320} 
                              altLight={"Cactus in a pot illustration for the plant-themed portfolio, made by MD"} 
                              altDark={"Magnolia flower illustration for the plant-themed portfolio, made by MD"}
                              sizes="(max-width: 580px) 70vw"
                              layout = "responsive"
                              className="h-[320px] w-auto mobiles:h-auto"
                              />
                <span className="absolute bottom-0 scale-0 rounded bg-purple-dark p-1 text-[10px] font-roboto text-white group-hover:scale-100">✨ Je réalise aussi des illustrations ✨</span>
              </div>
            </div>
          </main>
        <Footer/>
      </div>
    </>
  )
}
