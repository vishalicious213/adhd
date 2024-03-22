import React from 'react'
import Question from './Question'
import { questionsArray } from '../data/questions'

const Form = () => {
    return (
        <>
            {questionsArray.map(q => <Question question={q.text} num={q.id} key={q.id}/>) }
        </>
    )
}

export default Form