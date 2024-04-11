import React from 'react'

const SasiFooter = ({ onclick }) => {
    return (
        <nav>
            <button onClick={() => onclick("sasi1")}>Part 1: Childhood ADHD Patterns</button>
            <button onClick={() => onclick("sasi2")}>Part 2: Adult ADHD Patterns</button>
        </nav>
    )
}

export default SasiFooter