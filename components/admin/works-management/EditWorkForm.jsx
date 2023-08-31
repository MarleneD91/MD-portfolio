"use client"

import { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'

import Image from 'next/image'

import { TbX } from 'react-icons/tb'

import { FaPencilAlt } from "react-icons/fa"





const AddWorkForm = (props) => {

  const workId = props.workId

  const [isConnected, setIsConnected] = useState()
  useEffect(() => {
    setIsConnected(localStorage.getItem("token"))
  })
  
  const [title, setTitle] = useState(props.workTitle);
  const [description, setDescription] = useState(props.workDescription)
  const [issues, setIssues] = useState(props.workIssues)
  const [technos, setTechnos] = useState(props.workTechnos)
  const [githubLink, setGithubgLink] = useState(props.workGit)
  const imageUrl = props.workImage;
  const [file, setFile] = useState()
   
  const [success, setSuccess] = useState(false);

  const router = useRouter()

  const [editWorkModal, setEditWorkModal] = useState(false)
  const openEditModal = () => {
    setEditWorkModal(true)
    setSuccess(false)
  }  
  const closeEditModal = () => {
    setEditWorkModal(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(isConnected){
      const formData = new FormData();
      formData.append("title", title)
      formData.append("description", description)
      formData.append("issues", issues)
      formData.append("technos", technos)
      formData.append("githubLink", githubLink)
      formData.append("imageUrl", imageUrl)
      if(file) {
        const fileURL = URL.createObjectURL(file)
        formData.append("file", file, fileURL)
      }

      const res = await fetch("api/works/" + workId, {
        method: "PUT",
        body: formData
      });

      if(res.status === 200){
        setSuccess(true);
        alert("Work updated!")   
        setEditWorkModal(false)
      } else {
        alert("Something went wrong while updating the project.")
      }
    } else {
      alert("Vous n'êtes pas autorisé à effectuer cette action!")
    }
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
          <div className='relative max-h-fit mt-60 pt-12 p-6 mb-6 mx-auto  w-8/12  flex flex-col z-60'>
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
                  defaultValue={title}
                  type="text"
                  id="title"
                  className="rounded-md p-1 dark:bg-dark-blue-form"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col mx-4">
                <label htmlFor="description" className="w-11/12 place-self-start my-2">Description</label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  defaultValue={description}
                  id="description"
                  className="rounded-md p-1 dark:bg-dark-blue-form h-28"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col mx-4">
                <label htmlFor="issues" className="w-11/12 place-self-start my-2">Difficultées rencontrées</label>
                <textarea
                  onChange={(e) => setIssues(e.target.value)}
                  defaultValue={issues}
                  id="issues"
                  className="rounded-md p-1 dark:bg-dark-blue-form h-24"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col mx-4">
                <label htmlFor='technos' className='w-11/12 place-self-start my-2'>Technologies utilisées</label>
                <input
                onChange={handleTechnos}
                defaultValue={technos}
                id='technos'
                autoComplete='off'
                />
              </div>
              <div className="flex flex-col mx-4">
                <label htmlFor="githubLink" className="w-11/12 place-self-start my-2">Lien Github</label>
                <input
                  onChange={(e) => setGithubgLink(e.target.value)}
                  defaultValue={githubLink}
                  type="url"
                  id="githubLink"
                  className="rounded-md p-1 dark:bg-dark-blue-form"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col mx-4">
                <label htmlFor="imageUrl" className="w-11/12 place-self-start my-2">Image</label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="imageUrl"/>
                {file ? <Image src={URL.createObjectURL(file)} width={250} height={200} alt="Image of the project"/> : <Image src={imageUrl} width={250} height={200} alt="Image of the project"/>}
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