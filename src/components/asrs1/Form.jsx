import React from 'react'
import { useState, useEffect } from 'react'
import ADHDScaleQuestions from '../render/AdhdScaleQuestions'
import Score from './Score'
import LocalData from '../../utilities/saveLocalData'
import loadLocalData from '../../utilities/loadLocalData'
import { questionsArray } from '../../data/asrs1'

const Form = () => {
    const [formData, setFormData] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: "",
        answer8: "",
        answer9: "",
        answer10: "",
        answer11: "",
        answer12: "",
        answer13: "",
        answer14: "",
        answer15: "",
        answer16: "",
        answer17: "",
        answer18: "",
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const savedData = await loadLocalData("asrs1")
                setFormData(savedData)
            } catch (error) {
                console.error("No saved data found for ASRS1 tool")
            }
        }

        fetchData()
    }, [])

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

            <LocalData name="asrs1" data={formData} />
            <Score scores={formData} />
        </>
    )
}

export default Form