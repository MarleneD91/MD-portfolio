"use client"

import SignInForm from '@/components/admin/SignInForm'

import { CookiesProvider, useCookies } from "react-cookie";
import Dashboard from '../admin/page';
import SignUpForm from '@/components/admin/SignupForm';

const Admin = () => {
    const [cookies, setCookies] = useCookies()
  
  return (
    <CookiesProvider>
        {cookies.user ? 
            (<Dashboard/>)
           : (<div className='mt-28' >
                <SignInForm />      
            </div>)}
    </CookiesProvider>


  )
}

export default Admin