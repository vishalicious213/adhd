import React from 'react'
import { useState } from 'react'
import ADHDScaleQuestions from '../render/AdhdScaleQuestions'
import RenderCheckboxQuestions from '../render/RenderCheckboxQuestions'
import Score from './Score'
import LocalData from '../../utilities/saveLocalData'
import loadLocalData from '../../utilities/loadLocalData'
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

            <h3>Additional screening questions highly suggestive of ADHD:</h3>
            <RenderCheckboxQuestions questions={additionalQuestions} />

            <LocalData name="asrs5" data={formData} reset={setFormData} />
            <Score scores={formData} />
        </>
    )
}

export default Form