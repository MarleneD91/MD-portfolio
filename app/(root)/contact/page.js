//Common
import Header from '@/components/common/Header/Header'
import Footer from '@/components/common/Footer/Footer'

//Main component
import ContactForm from '@/components/contact/ContactForm'

const Contact = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
    <Header/>
    <main>
      <p className='font-gentium italic font-normal text-base self-start text-center my-5 sm-devices:mx-3'>Vous souhaitez me contacter ? 
      N’hésitez pas à m’envoyer un message à l’aide du formulaire ci-dessous. <br/>
      Je m’engage à vous répondre dans les plus brefs délais. </p>
      <ContactForm/>
    </main>
    <Footer/>
  </div>
  )
}

export default Contact