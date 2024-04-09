import React from 'react'

const RenderSasiQuestions = ({ num, question, value, handleChange }) => {
    let stateIndex = num
    let stateType = ""

    if (num > 6) {stateIndex = num - 6}
    if (num >= 1 && num <= 6) {stateType = "inattention"}
    if (num >= 7 && num <= 14) {stateType = "hyper"}
    if (num >= 15 && num <= 19) {stateType = "impulse"}
    if (num >= 20 && num <= 23) {stateType = "product"}

    console.log(value)

    return (
        <div className="sasi-container">
            <select 
                id={`${stateType}${stateIndex}`}
                value={value[`${stateType}${stateIndex}`]}
                onChange={handleChange}
                name={`${stateType}${stateIndex}`} 
            >
                <option value=""></option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="?">?</option>
            </select>
            <label className="text" htmlFor={`${stateType}${stateIndex}`}>{question}</label>
        </div>
    )
}

export default RenderSasiQuestions