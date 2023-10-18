"use client"

import { useState } from 'react'

//icons
import { TbX } from "react-icons/tb"

const Legals = () => {

    const [legalsModal, setLegalsModal] = useState(true)
    const closeModal = () => {
        setLegalsModal(!legalsModal)
    }

    return (
        <>
        {legalsModal ?
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                <div className="flex flex-col p-8 mx-60 mt-30 border border-1 border-gray-300 dark:border-gray-500 rounded-[35px] bg-light-gray-form dark:bg-dark-gray-form sm-devices:mx-20 sm-devices:mt-30">
                    <div className='flex flex-row m-2 mb-6 items-center justify-between'>
                        <h1 className='text-2xl font-sansita w-full text-center'>Mentions légales</h1>
                        <div onClick={closeModal} className='text-end self-start text-3xl'><TbX/></div>
                    </div>
                    <div className='text-lg font-gentium mobile:text-base mobile-sm:text-sm'>
                        <p>Site édité par Marlène DIAZ, résidant au 14 Mail Gabriel Gautron, 91150 ETAMPES.<br/>
                        <span className='underline'>Téléphone :</span> 0641941184.<br/>
                        <span className='underline'>Adresse mail :</span> marlene.a.diaz@gmail.com.<br/>
                        <span className='underline'>Directrice de publication :</span> Marlène DIAZ.<br/>
                        Site hébergé par la société <span className='italic'>Vercel Inc.</span>, située 340 S Lemon Ave #4133 Walnut, CA 91789, et joignable au (559) 288-7060.</p>
                    </div>
                </div>

            </div> 
        : <></> }
        </>
    )
}

export default Legals