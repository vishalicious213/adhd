import React from 'react'
import { useContext, useEffect } from 'react'
import { Asrs1Context } from '.'
import ADHDScaleQuestions from '../render/AdhdScaleQuestions'
import loadLocalData from '../../utilities/loadLocalData'
import { questionsArray } from '../../data/asrs1'

const Form = () => {
    const { asrs1Data, setAsrs1Data } = useContext(Asrs1Context)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const savedData = await loadLocalData("asrs1")
                setAsrs1Data(savedData)
            } catch (error) {
                console.error("No saved data found for ASRS1 tool")
            }
        }

        fetchData()
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        setAsrs1Data(prevFormData => {
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
                checked={Object.values(asrs1Data)[q.id - 1]}
                handleChange={handleChange}
            />)}
        </>
    )
}

export default Form