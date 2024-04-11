import React from 'react'

const RenderSasiCheckbox = ({ questions, onchange, state, stateName }) => {
    // console.log(questions)
    // console.log(typeof questions)
    console.log(state)
    return (
        <section id="checkbox-questions">
            {questions.map((q, index) => {
                let item = `${stateName}${index}`
                return (
                    <div key={index}>
                        <label className="text checkbox-label">
                            <input 
                                type="checkbox" 
                                id={item}
                                name={item}
                                checked={state.item}
                                onChange={onchange}
                                className="asrs5checkbox"
                            />
                            <div>{q}</div>
                        </label>
                    </div>
                )
            }
            )}
        </section>
    )
}

export default RenderSasiCheckbox