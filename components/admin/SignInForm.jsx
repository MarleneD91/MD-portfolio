"use client"

import { useRouter } from 'next/navigation';

import { useState } from "react";


import cookieCutter from '@boiseitguru/cookie-cutter';


const SignInForm = ({onLogin}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const router = useRouter()

    const checkUser = async (e) => {
        e.preventDefault();
    
        const res = await fetch("api/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username,
            password
          }),
        });

        
        if(res.status === 200){
          setSuccess(true);
          setUsername("");
          setPassword("");
          const token = cookieCutter.get("token")
          console.log(token)
          if (typeof window !== "undefined" && window.localStorage){
            localStorage.setItem("token", token)
          }
          router.refresh()
        } else {
          alert("Connection failed.")
          setSuccess(false)
        }
    }

  return (
    <div>
        <form className="p-6 my-6 m-auto w-4/12 border border-1 border-gray-300 dark:border-gray-500 rounded-[35px] bg-light-gray-form dark:bg-dark-gray-form flex flex-col items-center gap-6" 
              onSubmit={checkUser}>
        <div className="flex flex-col mx-4">
          <label htmlFor="username" className="text-center my-2">Identifiant</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            id="username"
            placeholder="Identifiant"
            className="rounded-md p-1 dark:bg-dark-blue-form text-center"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col mx-4">
          <label htmlFor="password" className="text-center my-2">Mot de passe</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            placeholder="Mot de passe"
            className="rounded-md p-1 dark:bg-dark-blue-form text-center"
            autoComplete="off"
          />
        </div>
        <button className="bg-black text-white w-4/12 place-self-center px-2 pb-1 rounded-xl font-sansita font-regular" type="submit">
          {!success ? "Se connecter" : "Connexion réussie!"}
        </button>
        </form>
    </div>
  )
}

export default SignInForm