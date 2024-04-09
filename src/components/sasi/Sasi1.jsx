import React from 'react'
import { useState } from 'react'
import RenderSasiQuestions from '../render/RenderSasiQuestions'
import { sasi1Questions } from '../../data/sasi1'

const Sasi1 = () => {
    const [part1, setPart1] = useState({
        inattention1: "", inattention2: "", inattention3: "", inattention4: "", inattention5: "", inattention6: "",
        hyper1: "", hyper2: "", hyper3: "", hyper4: "", hyper5: "", hyper6: "", hyper7: "", hyper8: "", 
    })

    function handleChange(event) {
        const { name, value } = event.target
        setPart1(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        })
    }

    function renderQuestions(questions) {
        return (
            questions.map(q => <RenderSasiQuestions 
                key={q.id}
                num={q.id}
                question={q.text}
                value={part1}
                handleChange={handleChange}
            />)
        )
    }

    function RenderAllQuestions() {
        const inattention = sasi1Questions.filter(function(q){return q.id >= 1 && q.id <= 6})
        const hyperactivity = sasi1Questions.filter(function(q){return q.id >= 7 && q.id <= 14})
        const impulsivity = sasi1Questions.filter(function(q){return q.id >= 15 && q.id <= 19})

        return (
            <form>
                <h2>Inattention</h2>
                {renderQuestions(inattention)}
                <h2>Hyperactivity</h2>
                {renderQuestions(hyperactivity)}
                <h2>Impulsivity</h2>
                {renderQuestions(impulsivity)}
            </form>
        )
    }

    return (
        <>
            <div>
                <h1>Women's ADHD Self-Assessment Symptom Inventory (SASI)</h1>
                <h2>Part 1: Childhood ADHD Patterns</h2>
                <p className="text italics bottom-border">Answer this group of questions retrospectively, as you recall childhood experiences.</p>
                <p className="text italics no-border">Mark each item below with one of the code numbers to show how much that feeling or behavior is part of your personal experience.</p>
                <ol className="text bold no-top-margin" start="0">
                    <li>That's not at all like me; that almost never happens to me</li>
                    <li>That's a little like me; that happens to me, but not very often</li>
                    <li>That's a lot like me; that happens to me often</li>
                    <li>That's just like me; that happens to me almost all the time</li>
                </ol>
                <p className="text italics no-border">When an item does not pertain to you, such as a parenting question for a woman without children, simply leave that item blank.</p>
                <p className="text italics no-top-margin">When you encounter an item about an issue you can't recall or about which you have no knowledge, use a question mark (?) to respond.</p>
            </div>

            {RenderAllQuestions()}
        </>
    )
}

export default Sasi1