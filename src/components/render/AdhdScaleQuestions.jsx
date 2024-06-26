import React from 'react'

const ADHDScaleQuestions = ({ question, num, checked, handleChange }) => {
    return (
        <>
            <div className="question-container">
                <div className="question-num">{num}</div>
                <div className="text question">{question}</div>
            </div>

            <fieldset className="text">
                <legend>Frequency over past 6 months</legend>
                
                <div className="answer">
                    <input 
                        type="radio"
                        id={`never${num}`}
                        name={`answer${num}`} // same name for all; associates with same property in state
                        value="never" // the value that will be saved to state
                        checked={checked === "never"} // make it a controlled input
                        onChange={handleChange} // used to connect to event handler
                    />
                    <label htmlFor={`never${num}`}>Never</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id={`rarely${num}`}
                        name={`answer${num}`}
                        value="rarely"
                        checked={checked === "rarely"}
                        onChange={handleChange}
                    />
                    <label htmlFor={`rarely${num}`}>Rarely</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id={`sometimes${num}`}
                        name={`answer${num}`}
                        value="sometimes"
                        checked={checked === "sometimes"}
                        onChange={handleChange}
                    />
                    <label htmlFor={`sometimes${num}`}>Sometimes</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id={`often${num}`}
                        name={`answer${num}`}
                        value="often"
                        checked={checked === "often"}
                        onChange={handleChange}
                    />
                    <label htmlFor={`often${num}`}>Often</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id={`very-often${num}`}
                        name={`answer${num}`}
                        value="very-often"
                        checked={checked === "very-often"}
                        onChange={handleChange}
                    />
                    <label htmlFor={`very-often${num}`}>Very Often</label>
                </div>

            </fieldset>
        </>
    )
}

export default ADHDScaleQuestions