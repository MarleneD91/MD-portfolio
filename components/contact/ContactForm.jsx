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
        className="p-6 my-6 m-auto w-6/12 border-t rounded-[35px] bg-light-grey-form flex flex-col gap-5"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="w-11/12 place-self-start">Nom</label><br/>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            placeholder="Nom"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="firstname" className="w-11/12 place-self-start">Prénom</label><br/>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            id="Prénom"
            placeholder="Prénom"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="w-11/12 place-self-start">Email</label><br/>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="prenom.nom@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="w-11/12 place-self-start">Message</label><br/>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            placeholder="Écrivez quelque chose ..."
          ></textarea>
        </div>

        <button className="bg-black text-white w-3/12 place-self-center p-2 rounded-xl font-sansita font-regular" type="submit">
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