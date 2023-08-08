"use client"

import React from 'react'

import { useState } from 'react'

import TechnosTagsInput from './TechnosTagsInput'

const AddWorkForm = () => {

    const [title, setTitle] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/addwork", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        firstName,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setName("");
      setFirstName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="p-6 my-6 m-auto w-5/12 border border-1 border-gray-300 dark:border-gray-500 rounded-[35px] bg-light-gray-form dark:bg-dark-gray-form flex flex-col gap-5"
    >
        
        <label htmlFor="Picture">
        <p>Image</p>
        <div className={styles.AddImage}>
         {/*} {filePreview || book?.imageUrl ? (
            <>
              <img src={filePreview ?? book?.imageUrl} alt="preview" />
              <p>Modifier</p>
            </>
          ) : (
            <>
              <img src={addFileIMG} alt="Add file" />
              <p>Ajouter une image</p>
            </>
          )}*/}

        </div>
        <input {...register('file')} type="file" id="file" />
      </label>
   
      <div className="flex flex-col mx-4">
        <label htmlFor="title" className="w-11/12 place-self-start my-2">Titre du projet</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          id="title"
          placeholder="Titre"
          className="rounded-md p-1 dark:bg-dark-blue-form"
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col mx-4">
        <label htmlFor="description" className="w-11/12 place-self-start my-2">Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="h-32 rounded-md p-1 dark:bg-dark-blue-form"
          id="description"
          placeholder="Quel était l'objectif de ce projet ?"
          autoComplete="off"
        ></textarea>
      </div>

      <div className="flex flex-col mx-4">
        <label htmlFor="issues" className="w-11/12 place-self-start my-2">Difficultées rencontrées</label>
        <textarea
          onChange={(e) => setIssues(e.target.value)}
          value={issues}
          className="h-32 rounded-md p-1 dark:bg-dark-blue-form"
          id="issues"
          placeholder="Quelles sont les problèmes rencontrés et comment ont-ils été résolus ?"
          autoComplete="off"
        ></textarea>
      </div>

      <div>
        <p className='w-11/12 place-self-start my-2'>Technologies utilisées</p>
        <TechnosTagsInput/>
      </div>

      <div className="flex flex-col mx-4">
        <label htmlFor="githublink" className="w-11/12 place-self-start">Lien Github</label><br/>
        <input
          onChange={(e) => setGithublink(e.target.value)}
          value={githublink}
          type="url"
          id="githublink"
          placeholder="Github Link"
          className="rounded-md p-1 dark:bg-dark-blue-form"
          autoComplete="off"
        />
      </div>
     

      <button className="bg-black text-white w-3/12 place-self-center px-2 pb-1 rounded-xl font-sansita font-regular" type="submit">
        Ajouter
      </button>
    </form>

    <div className="bg-slate-100 flex flex-col">
      {error &&
        error.map((e) => (
          <div
            className={`${
              success ? "text-green-800" : "text-red-600"
            } px-5 py-2`}
          >
            {e}
          </div>
        ))}
    </div>
  </>
  )
}

export default AddWorkForm