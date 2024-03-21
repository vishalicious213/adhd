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
                        name="answer" // same name for all; associates with same property in state
                        value="never" // the value that will be saved to state
                        // checked={formData.employment === "unemployed"} // make it a controlled input
                        // onChange={handleChange} // used to connect to event handler
                    />
                    <label htmlFor="never">Never</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id="rarely"
                        name="answer" // same name for all; associates with same property in state
                        value="rarely" // the value that will be saved to state
                        // checked={formData.employment === "part-time"} // make it a controlled input
                        // onChange={handleChange} // used to connect to event handler
                    />
                    <label htmlFor="rarely">Rarely</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id="sometimes"
                        name="answer" // same name for all; associates with same property in state
                        value="sometimes" // the value that will be saved to state
                        // checked={formData.employment === "full-time"} // make it a controlled input
                        // onChange={handleChange} // used to connect to event handler
                    />
                    <label htmlFor="sometimes">Sometimes</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id="often"
                        name="answer" // same name for all; associates with same property in state
                        value="often" // the value that will be saved to state
                        // checked={formData.employment === "full-time"} // make it a controlled input
                        // onChange={handleChange} // used to connect to event handler
                    />
                    <label htmlFor="often">Often</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id="very-often"
                        name="answer" // same name for all; associates with same property in state
                        value="very-often" // the value that will be saved to state
                        // checked={formData.employment === "full-time"} // make it a controlled input
                        // onChange={handleChange} // used to connect to event handler
                    />
                    <label htmlFor="very-often">Very Often</label>
                </div>

            </fieldset>
        </>
    )
}

export default Question