//Common
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

//Main components
import WhoAmI from '@/components/aboutme/WhoAmI'
import Skills from '@/components/aboutme/Skills'
import Curriculum from '@/components/aboutme/Curriculum'
import CV from '@/components/aboutme/CV'

//Font Awesome Icon
import { FaCircle } from "react-icons/fa";

export const metadata = {
  title: 'Marlène DIAZ || À propos de moi',
  description: "Vous retrouverez ici les informations me concernant. N'hésitez pas à télécharger mon CV pour en apprendre un peu plus!",
}

const AboutMe = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header/>
        <main className='flex flex-col'>
          <WhoAmI />
          <div className='flex flex-row justify-center align-middle mt-2 mb-2  drop-shadow-[5px]:opacity-60 shadow-black'>
            <FaCircle className='text-[7px]'/><hr className="border-[1px] border-black dark:border-dark-mode-white w-11/12 shadow-black shadow-lg place-self-center"/><FaCircle className='text-[7px]'/>
          </div>
          <Skills/>
          <Curriculum/>
          <div className='flex flex-row justify-center align-middle mt-2 mb-2  drop-shadow-[5px]:opacity-60 shadow-black'>
            <FaCircle className='text-[7px]'/><hr className="border-[1px] border-black dark:border-dark-mode-white w-11/12 shadow-black shadow-lg place-self-center"/><FaCircle className='text-[7px]'/>
          </div>
          <CV/>
        </main>
      <Footer/>
    </div>
  )
}

export default AboutMe