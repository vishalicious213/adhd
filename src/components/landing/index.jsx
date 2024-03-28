import React from 'react'
import { useState } from 'react'
import Asrs1 from '../asrs1'
import RenderSection from './RenderSection'
import { sectionsAdhdArray } from '../../data/sectionsAdhd'

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

            {sectionsAdhdArray.map(section => (
                <RenderSection
                    key={section.name}
                    name={section.name}
                    def={section.def}
                    tools={section.tools}
                    links={section.links}
                    click={handleClick}
                />
            ))}

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