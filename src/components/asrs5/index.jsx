import React from 'react'
import { useState, createContext } from "react"

import Instructions from "./Instructions"
import Form from "./Form"
import LocalData from '../../utilities/saveLocalData'
import Score from './Score'

const Asrs5Context = createContext()

const Asrs5 = () => {
    const [formData, setFormData] = useState({
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
            formData, 
            setFormData,
            score,
            setScore,
            complete,
            setComplete
        }}>
            <Instructions />
            <Form />
            <LocalData name="asrs5" data={formData} reset={setFormData} />
            <Score scores={formData} />
        </Asrs5Context.Provider>
    )
}

export default Asrs5
export { Asrs5Context }