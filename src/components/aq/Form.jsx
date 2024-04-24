import React from 'react'
import { useContext, useEffect } from 'react'
import { AQContext } from '.'
import RenderAqQuestions from './RenderAqQuestions'
import loadLocalData from '../../utilities/loadLocalData'
import { questionsArray } from '../../data/aq'

const Form = () => {
    const { setAqData } = useContext(AQContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const savedData = await loadLocalData("aq")
                setAqData(savedData)
            } catch (error) {
                console.error("No saved data found for AQ tool")
            }
        }

        fetchData()
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        setAqData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }

    return (
        <>
            {questionsArray.map(q => {
                return (
                    <RenderAqQuestions 
                        key={q.id}
                        question={q.text}
                        num={q.id}
                        checked={`answer${q.id}`}
                        handleChange={handleChange}
                    />)}

                )
            }
            
        </>
    )
}

export default Form