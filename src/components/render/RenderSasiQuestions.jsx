import React from 'react'

const RenderSasiQuestions = ({ num, question, value, handleChange }) => {
    console.log(num, question)
    console.log(value)
    let item = `inattention${num}`
    console.log(value[item])

    return (
        <div className="question-container">
            
            <select 
                id={`inattention${num}`}
                value={value[`inattention${num}`]}
                onChange={handleChange}
                name={`inattention${num}`} 
            >
                <option value=""></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="?">?</option>
            </select>
            <label className="text" htmlFor={`inattention${num}`}>{question}</label>
        </div>
    )
}

export default RenderSasiQuestions