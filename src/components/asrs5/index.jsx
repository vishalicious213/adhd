import React from 'react'
import { useState, createContext } from "react"

import Instructions from "./Instructions"
import Form from "./Form"
import SaveAndDelete from '../../utilities/saveLocalData'
import Score from './Score'

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
    const [score, setScore] = useState(0)
    const [complete, setComplete] = useState(false)

    return (
        <Asrs5Context.Provider value={{
            asrs5Data, 
            setAsrs5Data,
            score,
            setScore,
            complete,
            setComplete
        }}>
            <Instructions />
            <Form />
            <SaveAndDelete name="asrs5" data={asrs5Data} reset={setAsrs5Data} />
            <Score scores={asrs5Data} />
        </Asrs5Context.Provider>
    )
}

export default Asrs5
export { Asrs5Context }