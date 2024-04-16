import React from 'react'
import { useContext, useEffect } from 'react'
import { Asrs5Context } from '.'
import ADHDScaleQuestions from '../render/AdhdScaleQuestions'
import RenderCheckboxQuestions from '../render/RenderCheckboxQuestions'
import loadLocalData from '../../utilities/loadLocalData'
import { questionsArray, additionalQuestions } from '../../data/asrs5'

const Form = () => {
    const { asrs5Data, setAsrs5Data } = useContext(Asrs5Context)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const savedData = await loadLocalData("asrs5")
                setAsrs5Data(savedData)
            } catch (error) {
                console.error("No saved data found for ASRS5 tool")
            }
        }

        fetchData()
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        setAsrs5Data(prevFormData => {
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
                checked={Object.values(asrs5Data)[q.id - 1]}
                handleChange={handleChange}
            />)}

            <h3>Additional screening questions highly suggestive of ADHD:</h3>
            <RenderCheckboxQuestions questions={additionalQuestions} />
        </>
    )
}

export default Form