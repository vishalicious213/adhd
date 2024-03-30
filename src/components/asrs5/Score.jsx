import React from 'react'
import { useState } from 'react'

const Score = ({ scores }) => {
    const [score, setScore] = useState(0)

    function getScore() {
        let adhdScore = 0
        let scoresArray = Object.values(scores)

        scoresArray.forEach(score => {
            if (score === "rarely") {
                adhdScore = adhdScore + 1
            }

            if (score === "sometimes") {
                adhdScore = adhdScore + 2
            }

            if (score === "often") {
                adhdScore = adhdScore + 3
            }

            if (score === "very-often") {
                adhdScore = adhdScore + 4
            }
        })

        setScore(adhdScore)
    }

    return (
        <div id="score">
            <button className="score-btn" onClick={getScore}>SCORE</button>
            <div className="text">
                {score >= 14 ? `Score of ${score} suggests ADHD is possible` 
                : `Score of ${score} suggests ADHD is unlikely`}
            </div>
        </div>
    )
}

export default Score