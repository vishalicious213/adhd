import React from 'react'
import { useContext } from 'react'
import { AQContext } from '.'

const RenderAqQuestions = ({ question, num, checked, handleChange }) => {
    const { aqData } = useContext(AQContext)

    return (
        <>
            <div className="question-container">
                <h3 className="question-num">{num}</h3>
                <div className="text question">{question}</div>
            </div>

            <fieldset className="text">
                {/* <legend>Frequency over past 6 months</legend> */}
                
                <div className="answer">
                    <input 
                        type="radio"
                        id={`def-agree${num}`}
                        name={`answer${num}`} // same name for all; associates with same property in state
                        value="def-agree" // the value that will be saved to state
                        checked={aqData[checked] === "def-agree"} // make it a controlled input
                        onChange={handleChange} // used to connect to event handler
                    />
                    <label htmlFor={`def-agree${num}`}>Definitely agree</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id={`slight-agree${num}`}
                        name={`answer${num}`}
                        value="slight-agree"
                        checked={aqData[checked] === "slight-agree"}
                        onChange={handleChange}
                    />
                    <label htmlFor={`slight-agree${num}`}>Slightly agree</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id={`slight-disagree${num}`}
                        name={`answer${num}`}
                        value="slight-disagree"
                        checked={aqData[checked] === "slight-disagree"}
                        onChange={handleChange}
                    />
                    <label htmlFor={`slight-disagree${num}`}>Slightly disagree</label>
                </div>

                <div className="answer">
                    <input 
                        type="radio"
                        id={`def-disagree${num}`}
                        name={`answer${num}`}
                        value="def-disagree"
                        checked={aqData[checked] === "def-disagree"}
                        onChange={handleChange}
                    />
                    <label htmlFor={`def-disagree${num}`}>Definitely disagree</label>
                </div>
            </fieldset>
        </>
    )
}

export default RenderAqQuestions