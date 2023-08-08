import React from 'react'

const WhatIUse = ({elements, categoryName}) => {
    return (
        <div className='flex flex-row mb-6 ml-6'>
            <h2 className='font-sansita font-bold text-3xl p-4 mb-4 ml-3 text-center'>{categoryName} :</h2>
            <div className='flex flex-row items-center'>
                {elements.map((element) => 
                    <div className='group relative flex justify-center' key={element.id}>
                        <div className='text-5xl mx-2'>{element.icon}</div>
                        <span className="absolute bottom-0 scale-0 rounded bg-purple-dark p-1 text-[10px] font-roboto text-white group-hover:scale-100">{element.id}</span>
                    </div>
                )} 
            </div>
        </div>
    )
}

export default WhatIUse