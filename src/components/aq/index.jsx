import React from 'react'
import { useState, createContext } from "react"

import Instructions from "./Instructions"
// import Form from "./Form"
// import SaveAndDelete from '../../utilities/saveLocalData'
// import Score from './Score'

const AQContext = createContext()

const AQ = () => {
    const [aqData, setAqData] = useState({})
    // const [aqScore, setAqScore] = useState(0) 
    // const [aqComplete, setAqComplete] = useState(false)

    return (
        <AQContext.Provider value={{
            aqData,
            setAqData
        }}>
            <Instructions />
            {/* <Form /> */}
            {/* <SaveAndDelete name="asrs1" data={asrs1Data} reset={setAsrs1Data} /> */}
            {/* <Score scores={asrs1Data} /> */}
        </AQContext.Provider>
    )
}

export default AQ
export { AQContext }