import React from 'react'

const RenderSasiCheckbox = ({ questions, onchange, state, stateName }) => {
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
                                checked={state[item] || false}
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