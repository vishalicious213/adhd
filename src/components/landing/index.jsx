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

    function RenderSectionArray({ sectionArr }) {
        let data = sectionArr[0]

        return (
            <RenderSection
                key={data.name}
                name={data.name}
                def={data.def}
                links={data.links}
                tools={data.tools}
                click={handleClick}
            />
        )
    }

    return (
        <div>
            <button onClick={() => handleClick("home")}>HOME</button>
            <button onClick={() => handleClick("adhd")}>ADHD</button>

            <div>{
                selected === "home" ? "" :
                selected === "adhd" ? <RenderSectionArray sectionArr={sectionsAdhdArray} /> :
                selected === "asrs1" ? <Asrs1 /> :
                ""
                }
            </div>
        </div>
    )
}

export default Index