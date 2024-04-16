import React from 'react'
import { useState, createContext } from "react"

import Instructions from "./Instructions"
import Form from "./Form"

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

    return (
        <Asrs5Context.Provider value={{formData, setFormData}}>
            <Instructions />
            <Form />
        </Asrs5Context.Provider>
    )
}

export default Asrs5
export { Asrs5Context }