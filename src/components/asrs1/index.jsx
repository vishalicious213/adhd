import React from 'react'
import { useState, createContext } from "react"

import Instructions from "./Instructions"
import Form from "./Form"

const Asrs1Context = createContext()

const Asrs1 = () => {
    const [asrs1Data, setAsrs1Data] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: "",
        answer8: "",
        answer9: "",
        answer10: "",
        answer11: "",
        answer12: "",
        answer13: "",
        answer14: "",
        answer15: "",
        answer16: "",
        answer17: "",
        answer18: "",
    })
    const [asrs1Score, setAsrs1Score] = useState(0) 
    const [asrs1Complete, setAsrs1Complete] = useState(false)

    return (
        <Asrs1Context.Provider value={{
            asrs1Data,
            setAsrs1Data,
            asrs1Score, 
            setAsrs1Score,
            asrs1Complete, 
            setAsrs1Complete
        }}>
            <Instructions />
            <Form />
        </Asrs1Context.Provider>
    )
}

export default Asrs1
export { Asrs1Context }