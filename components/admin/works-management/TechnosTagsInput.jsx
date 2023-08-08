"use client"

import { useState } from 'react'

function TechnosTagsInput(){
    const [tags, setTags] = useState([])

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    return (
        <div className="rounded-md p-1 dark:bg-dark-blue-form">
            { tags.map((tag, index) => (
                <div className="rounded-md p-1 bg-dark-blue-form dark:bg-light-gray-form text-white dark:text-black" key={index}>
                    <span>{tag}</span>
                    <span onClick={() => removeTag(index)}>&times;</span> {/*Special char, means "X"*/}
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Type somthing" />
        </div>
    )
}

export default TechnosTagsInput