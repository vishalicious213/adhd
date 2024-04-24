import React from 'react'
import { useState, createContext } from "react"

import Instructions from "./Instructions"
import Form from "./Form"
// import SaveAndDelete from '../../utilities/saveLocalData'
// import Score from './Score'

const AQContext = createContext()

const AQ = () => {
    const [aqData, setAqData] = useState({})
    // const [aqData, setAqData] = useState({
    //     answer1: "", answer2: "", answer3: "", answer4: "", answer5: "", answer6: "", answer7: "", answer8: "", answer9: "", answer10: "",
    //     answer1: "", answer12: "", answer13: "", answer14: "", answer15: "", answer16: "", answer17: "", answer18: "", answer19: "", answer20: "",
    //     answer2: "", answer22: "", answer23: "", answer24: "", answer25: "", answer26: "", answer27: "", answer28: "", answer29: "", answer30: "",
    //     answer3: "", answer32: "", answer33: "", answer34: "", answer35: "", answer36: "", answer37: "", answer38: "", answer39: "", answer40: "",
    //     answer4: "", answer42: "", answer43: "", answer44: "", answer45: "", answer46: "", answer47: "", answer48: "", answer49: "", answer50: ""
    // })
    // const [aqScore, setAqScore] = useState(0) 
    // const [aqComplete, setAqComplete] = useState(false)

    return (
        <AQContext.Provider value={{
            aqData,
            setAqData
        }}>
            <Instructions />
            <Form />
            {/* <SaveAndDelete name="asrs1" data={asrs1Data} reset={setAsrs1Data} /> */}
            {/* <Score scores={asrs1Data} /> */}
        </AQContext.Provider>
    )
}

export default AQ
export { AQContext }