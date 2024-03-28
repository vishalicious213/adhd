import React from 'react'
import { useState } from 'react'
import Asrs1 from '../asrs1'
import RenderSection from './RenderSection'

const sectionsArray = [
    {
        name: "ADHD",
        def: "ADHD is one of the most common neurodevelopmental disorders of childhood. It is usually first diagnosed in childhood and often lasts into adulthood. Children with ADHD may have trouble paying attention, controlling impulsive behaviors (may act without thinking about what the result will be), or be overly active.",
        tools: [{tool: "ASRS v1.1", choice: "asrs1"}, {tool: "ASRS v5", choice: "asrs5"}],
        links: "adhd links"
    }
]

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

            {sectionsArray.map(section => (
                <RenderSection
                    key={section.name}
                    name={section.name}
                    def={section.def}
                    tools={section.tools}
                    links={section.links}
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