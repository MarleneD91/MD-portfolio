"use client"

import { useState, useEffect } from 'react';

import SignInForm from '@/components/admin/SignInForm'

import { CookiesProvider, useCookies } from "react-cookie";
import Dashboard from '@/components/admin/Dashboard';

import { useRouter } from 'next/navigation';

const Admin = () => {
    const [cookies, setCookies, removeCookies ] = useCookies(["user"])
    const router = useRouter()

    function handleLogin(user) {
      setCookies("user", user, { path: "/admin", secure: "true", sameSite: "none" });
      router.push('/admin')
      console.log(cookies.user)
    }

    function handleLogout(){
      setCookies("user", "", { path: "/admin", secure: "true", sameSite: "none" })
      router.push('/')
      console.log(cookies.user)
    }

    const isConnected = () =>{
      cookies.user.value.length > 10;
      isClient(true);
    }

  return (
    <CookiesProvider>
        { isConnected ? 
            (<Dashboard onLogout={handleLogout}/>)
           : (<div className='mt-28' >
                <SignInForm onLogin={handleLogin}/>      
              </div>)}
    </CookiesProvider>
  )
}

export default Admin