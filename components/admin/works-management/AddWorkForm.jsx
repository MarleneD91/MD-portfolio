//ADD WORK FORM FIRST

"use client"

import React from 'react'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

const AddWorkForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [issues, setIssues] = useState("")
    const [technos, setTechnos] = useState([])
    const [githubLink, setGithubgLink] = useState("")
    const [imageUrl, setImageUrl] = useState();
   
    const [success, setSuccess] = useState(false);

    const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch("api/works", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        issues: issues,
        technos: technos,
        githubLink: githubLink,
        imageUrl: imageUrl
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      alert("Work added!")
      router.push('/admin')
    }else{
      alert("Something went wrong!")
    }
  };

  const handleImg = (e) =>{
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  }

  const handleTechnos = (e) => {
    const value = e.target.value
    setTechnos(value.split(','))
  }
  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="p-6 my-6 m-auto w-5/12 border border-1 border-gray-300 dark:border-gray-500 rounded-[35px] bg-light-gray-form dark:bg-dark-gray-form flex flex-col gap-5"
    >
      <div className="flex flex-col mx-4">
        <label htmlFor="title" className="w-11/12 place-self-start my-2">Nom du projet</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          id="title"
          placeholder="Nom du projet"
          className="rounded-md p-1 dark:bg-dark-blue-form"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col mx-4">
        <label htmlFor="description" className="w-11/12 place-self-start my-2">Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          id="description"
          placeholder="Décrivez le projet..."
          className="rounded-md p-1 dark:bg-dark-blue-form h-28"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col mx-4">
        <label htmlFor="issues" className="w-11/12 place-self-start my-2">Difficultées rencontrées</label>
        <textarea
          onChange={(e) => setIssues(e.target.value)}
          value={issues}
          id="issues"
          placeholder="Quelles ont été les difficultés rencontrées ?"
          className="rounded-md p-1 dark:bg-dark-blue-form h-24"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col mx-4">
        <label htmlFor='technos' className='w-11/12 place-self-start my-2'>Technologies utilisées</label>
        <input
        onChange={handleTechnos}
        value={technos}
        id='technos'
        placeholder='Technologies utilisées'
        autoComplete='off'
        />
      </div>
      <div className="flex flex-col mx-4">
        <label htmlFor="githubLink" className="w-11/12 place-self-start my-2">Lien Github</label>
        <input
          onChange={(e) => setGithubgLink(e.target.value)}
          value={githubLink}
          type="url"
          id="githubLink"
          placeholder="Lien du repository Github"
          className="rounded-md p-1 dark:bg-dark-blue-form"
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col mx-4">
        <label htmlFor="imageUrl" className="w-11/12 place-self-start my-2">Image</label>
        <input
          onChange={handleImg}
          type="file"
          id="imageUrl"/>
        {!imageUrl ? <></> : <Image src={imageUrl} width={250} height={200} alt="Image of the project"/>}
      </div>
      
      <button className="bg-black text-white w-3/12 place-self-center px-2 pb-1 rounded-xl font-sansita font-regular" type="submit">
        Ajouter
      </button>
    </form>
  </>
  )
}

export default AddWorkForm