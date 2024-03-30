import React from 'react'
import { useState } from 'react'

const Score = ({ scores }) => {
    const [score, setScore] = useState(0)

    function getScore() {
        let adhdScore = 0
        let scoresArray = Object.values(scores)
        // console.log(scores)
        // console.log(scoresArray)

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
        console.log("Score", score)
    }

    return (
        <div>
            <button className="score-btn" onClick={getScore}>SCORE</button>
            <div>{score}</div>
        </div>
    )
}

export default Score