import React from 'react'

const RenderCheckboxQuestions = ({ questions }) => {
    console.log(questions)
    return (
        <section>
            {questions.map(q => (
                <div key={q.id}>
                    <div>{q.text}</div>
                </div>
            ))}
        </section>
    )
}

export default RenderCheckboxQuestions