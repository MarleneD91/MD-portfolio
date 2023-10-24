//Font Awesome pdf icon
import { FaFilePdf } from 'react-icons/fa'

const CV = () => {
  return (
    <div className='flex flex-col items-center mb-12 mt-5'>
        <h2 className='font-sansita font-bold text-5xl mb-4 text-center mobile-sm:text-4xl'>Mon CV.</h2>
        <a href="/CV/DIAZ-Marlène_DéveloppeuseWebFront_CV.pdf" download><FaFilePdf className='text-7xl mobile-sm:text-6xl'/></a>
    </div>
  )
}

export default CV