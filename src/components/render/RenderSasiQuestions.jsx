import React from 'react'

const RenderSasiQuestions = ({ num, question, value, handleChange }) => {
    console.log(num, question)
    console.log(value)

    return (
        <div className="question-container">
            {/* <div className="text">{num}</div>
            <div className="text question">{question}</div> */}
            
            <select 
                id={`inattention${num}`}
                value={`${value}.inattention${num}`}
                onChange={handleChange}
                name={`inattention${num}`} 
            >

            </select>
            <label className="text" htmlFor={`inattention${num}`}>{question}</label>
        </div>
    )
}

export default RenderSasiQuestions