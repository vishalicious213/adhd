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

            {/* <fieldset className="text"> */}
                <div className="answer-wrapper text">
                    <div className="answer agree-color">
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

                    <div className="answer agree-color">
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

                    <div className="answer disagree-color">
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

                    <div className="answer disagree-color">
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
                </div>
            {/* </fieldset> */}
        </>
    )
}

export default RenderAqQuestions