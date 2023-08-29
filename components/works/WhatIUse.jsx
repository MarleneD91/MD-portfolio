const WhatIUse = ({elements, categoryName}) => {
    return (
        <div className='flex flex-row mb-6 ml-6 tablet:flex-col tablet:ml-0 mobiles:flex-col mobiles:mx-2 mobiles:mb-2'>
            <h2 className='font-sansita font-bold text-3xl p-4 mb-4 ml-3 text-center sm-devices:text-xl tablet:ml-0 mobiles:ml-0 mobiles:text-lg'>{categoryName} :</h2>
            <div className='flex flex-row flex-wrap items-center tablet:justify-center mobiles:justify-center'>
                {elements.map((element) => 
                    <div className='group relative flex justify-center' key={element.id}>
                        <div className='text-5xl mx-2 sm-devices:text-4xl mobiles:text-3xl sm-devices:mb-2'>{element.icon}</div>
                        <span className="absolute bottom-0 scale-0 rounded bg-purple-dark p-1 text-[10px] font-roboto text-white group-hover:scale-100">{element.id}</span>
                    </div>
                )} 
            </div>
        </div>
    )
}

export default WhatIUse