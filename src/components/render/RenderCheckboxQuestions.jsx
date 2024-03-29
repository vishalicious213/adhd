import React from 'react'

const RenderCheckboxQuestions = ({ questions }) => {
    console.log(questions)
    return (
        <section>
            {questions.map(q => (
                <div key={q.id}>
                    <label className="text">
                        <input 
                            id={q.id}
                            type="checkbox" 
                            className="asrs5checkbox"
                        />
                            {q.text}
                    </label>
                </div>
            ))}
        </section>
    )
}

export default RenderCheckboxQuestions