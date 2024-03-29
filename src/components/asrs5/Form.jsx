import React from 'react'
import { useState } from 'react'
import Question from '../asrs1/Question'
// import Score from './Score'
import { questionsArray } from '../../data/asrs5'

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
            {questionsArray.map(q => <Question 
                question={q.text} 
                num={q.id} 
                key={q.id} 
                checked={Object.values(formData)[q.id - 1]}
                handleChange={handleChange}
            />)}

            {/* <Score scores={formData} /> */}
        </>
    )
}

export default Form