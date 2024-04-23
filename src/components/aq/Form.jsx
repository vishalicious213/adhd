import React from 'react'
import { useContext } from 'react'
import { AQContext } from '.'
import RenderAqQuestions from './RenderAqQuestions'
import { questionsArray } from '../../data/aq'

const Form = () => {
    const { aqData, setAqData } = useContext(AQContext)

    function handleChange(event) {
        console.log(event)
    }

    return (
        <>
            {questionsArray.map(q => <RenderAqQuestions 
                key={q.id}
                question={q.text}
                num={q.id}
                checked={Object.values(aqData)[q.id - 1]}
                handleChange={handleChange}
            />)}
        </>
    )
}

export default Form