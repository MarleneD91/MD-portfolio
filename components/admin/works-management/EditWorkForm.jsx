//ADD WORK FORM FIRST

"use client"

import React from 'react'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import { TbX } from 'react-icons/tb'

import { FaPencilAlt } from "react-icons/fa"




const AddWorkForm = (selectedWorkId) => {

  const workId = selectedWorkId

  const [editWorkModal, setEditWorkModal] = useState(false)
  const openEditModal = () => {
    setEditWorkModal(true)
  }
  const closeEditModal = () => {
    setEditWorkModal(false)
  }

  const isConnected = localStorage.getItem("token")
  
  const getOldData = async(e) => {
    const res = async () => {
      if(isConnected){
        const res = await fetch("api/works" + workId, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          }
        })
      }
      return res.json()
    }
  }
  
  const oldTechnos = getOldData.technos
  //.toString()

  const [title, setTitle] = useState(getOldData.title);
  const [description, setDescription] = useState(getOldData.description)
  const [issues, setIssues] = useState(getOldData.issues)
  const [technos, setTechnos] = useState(oldTechnos)
  const [githubLink, setGithubgLink] = useState(getOldData.githubLink)
  const [imageUrl, setImageUrl] = useState(getOldData.imageUrl);
   
  const [success, setSuccess] = useState(false);

  const router = useRouter()



  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if(isConnected){
      const res = await fetch("api/works", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          issues,
          technos,
          githubLink,
          imageUrl
        }),
      });

      if(res.status === 200){
        setSuccess(true);
        alert("Work updated!")   
        router.push('/admin')
      } else {
        alert("Something went wrong while updating the project.")
      }
    } else {
      alert("Vous n'êtes pas autorisé à effectuer cette action!")
    }
  }

  const handleImg = (e) =>{
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  }

  const handleTechnos = (e) => {
    const value = e.target.value
    setTechnos(value.split(','))
  }
  return (
    <>
      <div className='flex flex-row text-l mt-2 items-center' onClick={openEditModal}>
        <FaPencilAlt className='mr-2'/>
        <span>Éditer</span>
      </div>
      <>
        {editWorkModal ?
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
          <div className='relative max-h-fit mt-60 pt-12 p-6 mb-6 mx-auto  w-6/12  flex flex-col z-60'>
            <div className="flex flex-col p-6 mt-72 border border-1 border-gray-300 dark:border-gray-500 rounded-[35px] bg-light-gray-form dark:bg-dark-gray-form">
            <div className='flex flex-row mb-6 items-center justify-between'>
              <h2 className='text-2xl font-sansita w-full text-center'>Modifier un projet</h2>
              <div onClick={closeEditModal} className='text-end self-start text-3xl p-5'><TbX/></div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col mx-4">
                <label htmlFor="title" className="w-11/12 place-self-start my-2">Nom du projet</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  id="title"
                  placeholder={getOldData.title}
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
                  placeholder={getOldData.description}
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
                  placeholder={getOldData.description}
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
                placeholder={oldTechnos}
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
                  placeholder={getOldData.githubLink}
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
                {!imageUrl ? <Image src={getOldData.imageUrl} width={250} height={200} alt="Image of the project"/> : <Image src={imageUrl} width={250} height={200} alt="Image of the project"/>}
              </div>
              
              <button className="bg-black text-white w-3/12 place-self-center px-2 pb-1 mb-4 rounded-xl font-sansita font-regular" type="submit">
                {!success ? "Modifier" : "Projet modifié!"}
              </button>
            </form>
            </div>
          </div>
        </div> : <></>}
        </>
    </>
  )
}

export default AddWorkForm