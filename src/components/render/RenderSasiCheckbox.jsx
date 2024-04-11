import React from 'react'

const RenderSasiCheckbox = ({ questions, onchange, state }) => {
    // console.log(questions)
    // console.log(typeof questions)
    console.log(state)
    return (
        <section id="checkbox-questions">
            {questions.map((q, index) => (
                <div key={index}>
                    <label className="text checkbox-label">
                        <input 
                            id={q.id}
                            type="checkbox" 
                            className="asrs5checkbox"
                        />
                        <div>{q}</div>
                    </label>
                </div>
            ))}
        </section>
    )
}

export default RenderSasiCheckbox