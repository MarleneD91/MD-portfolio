"use client";

import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
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
        className="p-6 my-6 m-auto w-5/12 border border-1 rounded-[35px] bg-light-gray-form dark:bg-dark-gray-form flex flex-col gap-5"
      >
        <div className="flex flex-col mx-4">
          <label htmlFor="name" className="w-11/12 place-self-start my-2">Nom</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            placeholder="Nom"
            className="rounded-md p-1"
            autoComplete="family-name"
          />
        </div>
        <div className="flex flex-col mx-4">
          <label htmlFor="firstname" className="w-11/12 place-self-start">Prénom</label><br/>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            id="firstname"
            placeholder="Prénom"
            className="rounded-md p-1"
            autoComplete="first-name"
          />
        </div>
        <div className="flex flex-col mx-4">
          <label htmlFor="email" className="w-11/12 place-self-start my-2">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="prenom.nom@example.com"
            className="rounded-md p-1"
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col mx-4">
          <label htmlFor="message" className="w-11/12 place-self-start my-2">Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32 rounded-md p-1"
            id="message"
            placeholder="Écrivez quelque chose ..."
            autoComplete="off"
          ></textarea>
        </div>

        <button className="bg-black text-white w-3/12 place-self-center px-2 pb-1 rounded-xl font-sansita font-regular" type="submit">
          Envoyer
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
  );
}

export default ContactForm