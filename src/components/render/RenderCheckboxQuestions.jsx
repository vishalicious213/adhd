import React from 'react'

const RenderCheckboxQuestions = ({ questions }) => {
    console.log(questions)
    return (
        <section>
            {questions.map(q => (
                <div>
                    <label key={q.id} className="text">
                        <input type="checkbox" id={q.id}></input>
                            {q.text}
                    </label>
                </div>
            ))}
        </section>
    )
}

export default RenderCheckboxQuestions