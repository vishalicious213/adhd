import React from 'react'
import { useState } from 'react'
import { sasi1Questions } from '../../data/sasi1'

const Sasi1 = () => {
    function test() {
        console.log(sasi1Questions.length)
        for (let i = 0; i < sasi1Questions.length; i++) {
            // console.log(sasi1Questions[i])
            if (i < 3) {
                const inattention = sasi1Questions.filter(function(q){
                    return q.id > 2 && q.id <= 5
                })

                console.log(inattention)

                return (
                    <>
                        <h2>Inattention</h2>
                        {inattention.map(q => <div key={q.id}>{q.text}</div>)}
                    </>
                )
            }
            
            // sasi1Questions.map(q => {
            //     <div key={q.id}>{q.text}</div>
            // })

            // return (
            //     <div>{sasi1Questions[i].text}</div>
            // )
        }
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

            {test()}

            {/* {sasi1Questions.map(q => <div key={q.id}>{q.text}</div>)} */}
        </>
    )
}

export default Sasi1