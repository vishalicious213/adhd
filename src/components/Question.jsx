import React from 'react'

const Question = ({ question, answer }) => {
    return (
        <>
            <div>{question}</div>

            <fieldset>
                <legend>Frequency over past 6 months</legend>
                
                <input 
                    type="radio"
                    id="never"
                    name="answer" // same name for all; associates with same property in state
                    value="never" // the value that will be saved to state
                    // checked={formData.employment === "unemployed"} // make it a controlled input
                    // onChange={handleChange} // used to connect to event handler
                />
                <label htmlFor="never">Never</label>
                <br />
                
                <input 
                    type="radio"
                    id="rarely"
                    name="answer" // same name for all; associates with same property in state
                    value="rarely" // the value that will be saved to state
                    // checked={formData.employment === "part-time"} // make it a controlled input
                    // onChange={handleChange} // used to connect to event handler
                />
                <label htmlFor="rarely">Rarely</label>
                <br />
                
                <input 
                    type="radio"
                    id="sometimes"
                    name="answer" // same name for all; associates with same property in state
                    value="sometimes" // the value that will be saved to state
                    // checked={formData.employment === "full-time"} // make it a controlled input
                    // onChange={handleChange} // used to connect to event handler
                />
                <label htmlFor="sometimes">Sometimes</label>
                <br />

                <input 
                    type="radio"
                    id="often"
                    name="answer" // same name for all; associates with same property in state
                    value="often" // the value that will be saved to state
                    // checked={formData.employment === "full-time"} // make it a controlled input
                    // onChange={handleChange} // used to connect to event handler
                />
                <label htmlFor="often">Often</label>
                <br />

                <input 
                    type="radio"
                    id="very-often"
                    name="answer" // same name for all; associates with same property in state
                    value="very-often" // the value that will be saved to state
                    // checked={formData.employment === "full-time"} // make it a controlled input
                    // onChange={handleChange} // used to connect to event handler
                />
                <label htmlFor="very-often">Very Often</label>

            </fieldset>
        </>
    )
}

export default Question