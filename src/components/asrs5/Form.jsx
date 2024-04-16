import React from 'react'
import { useContext, useEffect } from 'react'
import { Asrs5Context } from '.'
import ADHDScaleQuestions from '../render/AdhdScaleQuestions'
import RenderCheckboxQuestions from '../render/RenderCheckboxQuestions'
import LocalData from '../../utilities/saveLocalData'
import loadLocalData from '../../utilities/loadLocalData'
import { questionsArray, additionalQuestions } from '../../data/asrs5'

const Form = () => {
    const { formData, setFormData } = useContext(Asrs5Context)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const savedData = await loadLocalData("asrs5")
                setFormData(savedData)
            } catch (error) {
                console.error("No saved data found for ASRS5 tool")
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

            <h3>Additional screening questions highly suggestive of ADHD:</h3>
            <RenderCheckboxQuestions questions={additionalQuestions} />

            <LocalData name="asrs5" data={formData} reset={setFormData} />
        </>
    )
}

export default Form