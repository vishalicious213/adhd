import React from 'react'
import { useContext } from 'react'
import { AQContext } from '.'
import RenderAqQuestions from './RenderAqQuestions'
import { questionsArray } from '../../data/aq'

const Form = () => {
    const { setAqData } = useContext(AQContext)

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