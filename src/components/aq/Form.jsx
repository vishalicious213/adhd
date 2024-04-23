import React from 'react'
import RenderAqQuestions from './RenderAqQuestions'
import { questionsArray } from '../../data/aq'

const Form = () => {
    function handleChange(event) {
        console.log(event)
    }

    return (
        <>
            {questionsArray.map(q => <RenderAqQuestions 
                key={q.id}
                question={q.text}
                num={q.id}
                handleChange={handleChange}
            />)}
        </>
    )
}

export default Form