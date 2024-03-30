import React from 'react'

const RenderCheckboxQuestions = ({ questions }) => {
    console.log(questions)
    return (
        <section>
            {questions.map(q => (
                <div key={q.id}>
                    <label className="text checkbox-label">
                        <input 
                            id={q.id}
                            type="checkbox" 
                            className="asrs5checkbox"
                        />
                        <div>
                            {q.text}
                        </div>
                    </label>
                </div>
            ))}
        </section>
    )
}

export default RenderCheckboxQuestions