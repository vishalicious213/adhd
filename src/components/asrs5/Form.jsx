import React from 'react'
import { useState } from 'react'
import ADHDScaleQuestions from '../render/AdhdScaleQuestions'
import RenderCheckboxQuestions from '../render/RenderCheckboxQuestions'
import { questionsArray, additionalQuestions } from '../../data/asrs5'

const Form = () => {
    const [formData, setFormData] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }

    return (
        <>
            {questionsArray.map(q => <ADHDScaleQuestions 
                question={q.text} 
                num={q.id} 
                key={q.id} 
                checked={Object.values(formData)[q.id - 1]}
                handleChange={handleChange}
            />)}

            <RenderCheckboxQuestions questions={additionalQuestions} />
        </>
    )
}

export default Form