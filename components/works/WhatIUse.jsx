import React from 'react'

import Image from 'next/image'


const WhatIUse = ({elements, categoryName}) => {
    return (
        <div className='flex flex-row mb-6 ml-6'>
            <h2 className='font-sansita font-bold text-3xl p-4 mb-4 ml-3 text-center'>{categoryName} :</h2>
            {elements.map(element => 
                <div className='group relative flex justify-center'>
                    <Image src={element.icon} alt={element.alt} key={element.id} height={70} width={70} className='m-2 place-self-center' />
                    <span className="absolute bottom-0 scale-0 rounded bg-purple-dark p-1 text-[10px] font-roboto text-white group-hover:scale-100">{element.id}</span>
                </div>
            )} 
        </div>
    )
}

export default WhatIUse