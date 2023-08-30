"use client"

//Main components
import SignInForm from '@/components/admin/SignInForm'
import Dashboard from '@/components/admin/Dashboard'; // If admin is logged

import { useRouter } from 'next/navigation';

const Admin = () => {

  const router = useRouter()

  const isConnected = localStorage.getItem("token")

  function handleLogout(){
    localStorage.clear()
    router.push('/')
  }

  return (
    <>
      {isConnected ? 
        (<Dashboard onLogout={handleLogout}/>)
        : (<div className='mt-28' >
            <SignInForm />      
          </div>)}
    </>
  )
}

export default Admin