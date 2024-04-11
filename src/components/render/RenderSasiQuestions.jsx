import React from 'react'
import RenderSasiCheckbox from './RenderSasiCheckbox'

const RenderSasiQuestions = ({data, onchange, state}) => {
    return (
        data.map(category => (<div key={category.stateName}>
            {category.type && 
                <>
                    <h2 className="sasi-section">{category.section}</h2>
                    {category.prompt && <p className="text no-border">{category.prompt}</p>}
                    <RenderSasiCheckbox 
                        questions={category.questions} 
                        onchange={onchange}
                        state={state}
                        stateName={category.stateName}
                    />
                </>
            }

            {!category.type &&
                <div key={category.stateName}>
                    {category.section && <h2 className="sasi-section">{category.section}</h2>}
                    {category.name && <h3 className="sasi-category">{category.name}</h3>}
                    <div className="sasi-container">
                        {
                            category.questions.map((q, index) => {
                                let item = `${category.stateName}${index}`

                                return (
                                    <div key={index} className="sasi-question">
                                        <select 
                                            id={item}
                                            value={state[item]}
                                            onChange={onchange}
                                            name={item} 
                                            className="sasi-select"
                                        >
                                            <option value=""></option>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="?">?</option>
                                        </select>
                                        <label className="text" htmlFor={item}>{q}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>))
    )
}

export default RenderSasiQuestions