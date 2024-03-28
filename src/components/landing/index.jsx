import React from 'react'
import { useState } from 'react'
import Asrs1 from '../asrs1'
import RenderSection from './RenderSection'

const sectionsArray = [
    {
        name: "ADHD",
        def: "ADHD is one of the most common neurodevelopmental disorders of childhood. It is usually first diagnosed in childhood and often lasts into adulthood. Children with ADHD may have trouble paying attention, controlling impulsive behaviors (may act without thinking about what the result will be), or be overly active.",
        tools: [
            {
                button: "ASRS v1.1", 
                choice: "asrs1", 
                title: "Adult ADHD Self-Report Scale (ASRS-v1.1) Symptom Checklist",
                desc: "The Symptom Checklist is an instrument consisting of 18 DSM-IV-TR criteria. Six of the eighteen questions were found to be the most predictive of symptoms consistent with ADHD. The remaining twelve provide additional cues and can serve as further probes into possible symptoms."}, 
            {
                button: "ASRS v5", 
                choice: "asrs5", 
                title: "Adult ADHD Self-Report Scale (ASRS-v5) Symptom Checklist",
                desc: "The ASRS5 is a self report questionnaire designed to assess symptoms of Attention Deficit Hyperactivity Disorder (ADHD) in adults. It consists of 6 questions related to symptoms of inattention and hyperactivity/impulsivity. The ASRS5 is an updated version of the ASRSv1.1."}
        ],
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