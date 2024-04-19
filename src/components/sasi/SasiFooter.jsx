import React from 'react'

const SasiFooter = ({ onclick }) => {
    return (
        <menu className="sasi-footer">
            <button onClick={() => onclick("sasi1")}>Part 1: Childhood ADHD Patterns</button>
            <button onClick={() => onclick("sasi2")}>Part 2: Adult ADHD Patterns</button>
        </menu>
    )
}

export default SasiFooter