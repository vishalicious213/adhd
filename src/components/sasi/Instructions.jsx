import React from 'react'

const Instructions = ({ onclick }) => {
    return (
        <>
            <h1>Women's ADHD Self-Assessment Symptom Inventory (SASI)</h1>
            <p className="text no-border">The following set of self-assessment questions has been developed informally, over time, reflecting the authors' (Kathleen Nadeau, Ph.D. and Patricia Quinn, M.D.) clinical experience in treating women and girls with ADHD. Some of the items included in the Inventory reflect issues more typical of women with Combined Type ADHD, while others are representative of women with Primarily Inattentive Type ADHD. At present, the following questions are appropriate for use as a detailed, structured self-assessment of a broad range of concerns typically reported by women with ADHD.</p>
            <p className="text italics no-top-margin">This scale should not be used for diagnostic purposes. Instead, results should be considered as part of a structured interview, and used in conjunction with diagnostic testing when evaluating women for possible ADHD.</p>
            <h3>Directions:</h3>
            <p className="text italics no-border">Mark each item below with one of the code numbers to show how much that feeling or behavior is part of your personal experience.</p>
            <ol className="text bold no-top-margin" start="0">
                <li>That's not at all like me; that almost never happens to me.</li>
                <li>That's a little like me; that happens to me, but not very often.</li>
                <li>That's a lot like me; that happens to me often.</li>
                <li>That's just like me; that happens to me almost all the time.</li>
            </ol>
            <p className="text italics no-border">When an item does not pertain to you, such as a parenting question for a woman without children, simply leave that item blank.</p>
            <p className="text italics no-border">When you encounter an item about an issue you can't recall or about which you have no knowledge, use a question mark (?) to respond.</p>

            <nav>
                <button onClick={() => onclick("sasi1")}>Part 1: Childhood ADHD Patterns</button>
                <button onClick={() => onclick("sasi2")}>Part 2: Adult ADHD Patterns</button>
            </nav>
        </>
    )
}

export default Instructions