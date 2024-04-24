import React from 'react'
import { useContext } from 'react'
import { AQContext } from '.'
import RenderAqQuestions from './RenderAqQuestions'
import { questionsArray } from '../../data/aq'

const Form = () => {
    const { aqData, setAqData } = useContext(AQContext)

    function handleChange(event) {
        const { name, value } = event.target
        setAqData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
        console.log(name, value)
        console.log(aqData)
    }

    return (
        <>
            {questionsArray.map(q => {
                // console.log(q.id, q.text)

                return (
                    <RenderAqQuestions 
                        key={q.id}
                        question={q.text}
                        num={q.id}
                        checked={`answer${q.id}`}
                        // checked={Object.values(aqData)[q.id - 1]}
                        handleChange={handleChange}
                    />)}

                )
            }
            
        </>
    )
}

export default Form