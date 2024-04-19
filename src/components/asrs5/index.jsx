import React from 'react'
import { useState, createContext } from "react"

import Instructions from "./Instructions"
import Form from "./Form"
import RenderCheckboxQuestions from '../render/RenderCheckboxQuestions'
import SaveAndDelete from '../../utilities/saveLocalData'
import Score from './Score'
import { additionalQuestions } from '../../data/asrs5'

const Asrs5Context = createContext()

const Asrs5 = () => {
    const [asrs5Data, setAsrs5Data] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
    })
    const [asrs5Score, setAsrs5Score] = useState(0)
    const [asrs5Complete, setAsrs5Complete] = useState(false)

    return (
        <Asrs5Context.Provider value={{
            asrs5Data, 
            setAsrs5Data,
            asrs5Score,
            setAsrs5Score,
            asrs5Complete,
            setAsrs5Complete
        }}>
            <Instructions />
            <Form />
            <h3>Additional screening questions highly suggestive of ADHD:</h3>
            <RenderCheckboxQuestions questions={additionalQuestions} />
            <SaveAndDelete name="asrs5" data={asrs5Data} reset={setAsrs5Data} />
            <Score scores={asrs5Data} />
        </Asrs5Context.Provider>
    )
}

export default Asrs5
export { Asrs5Context }