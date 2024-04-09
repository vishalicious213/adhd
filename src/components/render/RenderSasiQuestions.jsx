import React from 'react'

const RenderSasiQuestions = ({ num, question }) => {
    console.log(num, question)

    return (
        <div>
            <div>{question}</div>
        </div>
    )
}

export default RenderSasiQuestions