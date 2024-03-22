import React from 'react'
import { useState } from 'react'
import Question from './Question'
import { questionsArray } from '../data/questions'

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
        answer18: ""
    })

    return (
        <>
            {questionsArray.map(q => <Question question={q.text} num={q.id} key={q.id}/>) }
        </>
    )
}

export default Form