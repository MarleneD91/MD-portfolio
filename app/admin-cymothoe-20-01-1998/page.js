"use client"

//Main components
import SignInForm from '@/components/admin/SignInForm'
import Dashboard from '@/components/admin/Dashboard'; // If admin is logged

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Admin = () => {
  const [isConnected, setIsConnected] = useState()
  const router = useRouter()

  useEffect(() => {
    setIsConnected(localStorage.getItem("token"))
  })

  function handleLogout(){
    if (typeof window !== "undefined" && window.localStorage){
      localStorage.clear()
    }
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