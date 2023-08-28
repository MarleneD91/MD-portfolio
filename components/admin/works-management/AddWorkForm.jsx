//ADD WORK FORM FIRST

"use client"

import React from 'react'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import { TbX } from "react-icons/tb"

import FormData from 'form-data'



const AddWorkForm = () => {

  const isConnected = localStorage.getItem("token")

  const [addWorkModal, setAddWorkModal] = useState(true)
  const closeModal = () => {
    setAddWorkModal(!addWorkModal)
  }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [issues, setIssues] = useState("")
    const [technos, setTechnos] = useState([])
    const [githubLink, setGithubgLink] = useState("")
    const [file, setFile] = useState();
  

    const [success, setSuccess] = useState(false);

    const router = useRouter()

  
  const handleSubmit = async (e) => {
    e.preventDefault();

      console.log(isConnected)
      console.log(localStorage.getItem("token"))
    if(isConnected) {
      const formData = new FormData();
      formData.append("title", title)
      formData.append("description", description)
      formData.append("issues", issues)
      formData.append("technos", technos)
      formData.append("githubLink", githubLink)

      const fileURL = URL.createObjectURL(file)
      formData.append("file", file, fileURL)

      
      console.log(formData)
      console.log(title)
    const res = await fetch("/api/works", {
      method: "POST",
      /*headers: {
        "Content-type": "multipart/form-data",
        'Accept': 'application/json'
      },*/
      body: formData
      /*body: JSON.stringify({
        title,
        description,
        issues,
        technos,
        githubLink,
        imageUrl
      }),*/
    });

    if(res.status === 200){
      setSuccess(true);
      alert("Work added!")    
      router.push("/admin")
      setAddWorkModal(false)
    } else {
      alert("Something went wrong while creating the project.")
    }
  };
} 

  /*const handleImg = (e) =>{
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  }*/

  const handleTechnos = (e) => {
    const value = e.target.value.replace(/\s+/g, '')
    setTechnos(value.split(','))
  }
  
  return (
    <>
    {addWorkModal ?
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className='relative max-h-fit mt-36 pt-12 p-6 mb-6 mx-auto  w-6/12  flex flex-col z-60'>
          <div className="flex flex-col p-8 mt-48 border border-1 border-gray-300 dark:border-gray-500 rounded-[35px] bg-light-gray-form dark:bg-dark-gray-form">
          <div className='flex flex-row m-2 mb-6 items-center justify-between'>
            <h2 className='text-2xl font-sansita w-full text-center'>Ajouter un projet</h2>
            <div onClick={closeModal} className='text-end self-start text-3xl'><TbX/></div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            encType='multipart/form-data'
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
                required
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
                required
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
                required
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
              required
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
                required
              />
            </div>
            <div className="flex flex-col mx-4">
              <label htmlFor="file" className="w-11/12 place-self-start my-2">Image</label>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                id="file"
                required
              />
              {!file ? <></> : <Image src={URL.createObjectURL(file)} width={250} height={200} alt="Image of the project" className='m-4'/>}
            </div>
            
            <button className="bg-black text-white w-3/12 place-self-center px-2 pb-1 rounded-xl font-sansita font-regular" type="submit">
              {!success ? "Ajouter" : "Projet ajouté!"}
            </button>
          </form>
          </div>
        </div>
      </div>
      : <></> }
    </>
  )
}

export default AddWorkForm