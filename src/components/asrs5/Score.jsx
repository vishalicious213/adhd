import React from 'react'
import { useState } from 'react'

const Score = ({ scores }) => {
    const [score, setScore] = useState(0)

    function getScore() {
        let adhdScore = 0
        let scoresArray = Object.values(scores)
        console.log(scores)
        console.log(scoresArray)

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
            
            console.log(adhdScore)
        })
    }

    getScore()

    return (
        <div>Score</div>
    )
}

export default Score