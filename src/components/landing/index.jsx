import React from 'react'
import { useState } from 'react'
import Asrs1 from '../asrs1'
import RenderSection from './RenderSection'

const Index = () => {
    const [selected, setSelected] = useState("home")

    function handleClick(choice) {
        console.log(choice)
        setSelected(choice)
    }

    return (
        <div>
            <button onClick={() => handleClick("home")}>HOME</button>
            <button onClick={() => handleClick("asrs1")}>ASRS v1.1</button>

            <RenderSection
                // def=""
                // tools=""
                // links=""
            />

            <div>{
                selected === "home" ? "" :
                selected === "asrs1" ? <Asrs1 /> :
                ""
                }
            </div>
        </div>
    )
}

export default Index