import React from 'react'

const Question = ({ question, num }) => {
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
                        id="never"
                        name={`answer${num}`} // same name for all; associates with same property in state
                        value="never" // the value that will be saved to state
                        checked={`formData.answer${num}` === "never"} // make it a controlled input
                        // onChange={handleChange} // used to connect to event handler
                    />
                    <label htmlFor="never">Never</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id="rarely"
                        name={`answer${num}`}
                        value="rarely"
                        checked={`formData.answer${num}` === "rarely"}
                        // onChange={handleChange}
                    />
                    <label htmlFor="rarely">Rarely</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id="sometimes"
                        name={`answer${num}`}
                        value="sometimes"
                        checked={`formData.answer${num}` === "sometimes"}
                        // onChange={handleChange}
                    />
                    <label htmlFor="sometimes">Sometimes</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id="often"
                        name={`answer${num}`}
                        value="often"
                        checked={`formData.answer${num}` === "often"}
                        // onChange={handleChange}
                    />
                    <label htmlFor="often">Often</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id="very-often"
                        name={`answer${num}`}
                        value="very-often"
                        checked={`formData.answer${num}` === "very-often"}
                        // onChange={handleChange}
                    />
                    <label htmlFor="very-often">Very Often</label>
                </div>

            </fieldset>
        </>
    )
}

export default Question