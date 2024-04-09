import React from 'react'
import { useState } from 'react'
import Asrs1 from '../asrs1'
import Asrs5 from '../asrs5'
import Sasi from '../sasi'
import RenderSection from './RenderSection'
import { sectionsAdhdArray } from '../../data/sectionsAdhd'

const Index = () => {
    const [selected, setSelected] = useState("home")

    function handleClick(choice) {
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
            <nav>
                <button onClick={() => handleClick("home")}>HOME</button>
                <button onClick={() => handleClick("adhd")}>ADHD</button>
            </nav>

            <div>{
                selected === "home" ? "" :
                selected === "adhd" ? <RenderSectionArray sectionArr={sectionsAdhdArray} /> :
                selected === "asrs1" ? <Asrs1 /> :
                selected === "asrs5" ? <Asrs5 /> :
                selected === "sasi" ? <Sasi /> :
                ""
                }
            </div>
        </div>
    )
}

export default Index