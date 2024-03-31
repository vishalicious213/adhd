import React from 'react'
import { useState } from 'react'

const Score = ({ scores }) => {
    const [score, setScore] = useState(0)
    const [complete, setComplete] = useState(false)

    function getScore() {
        let adhdScore = 0
        let scoresArray = Object.values(scores)
        let unfinishedQuestions = 6
        setComplete(false)

        // loop through answers and increment score appropriately
        for (let i = 0; i < 6; i++) {
            if (i < 3) {
                if (["sometimes", "often", "very-often"].includes(scoresArray[i])) {
                    adhdScore++
                }
            } else {
                if (["often", "very-often"].includes(scoresArray[i])) {
                    adhdScore++
                }
            }
        }

        // make sure that all questions are answered
        scoresArray.forEach(scoreValue => {
            if (["never", "rarely", "sometimes", "often", "very-often"].includes(scoreValue)) {
                unfinishedQuestions--
            }
        })

        if (unfinishedQuestions === 0) {
            setScore(adhdScore)
            setComplete(true)
        }
    }

    return (
        <div id="score">
            <button className="score-btn" onClick={getScore}>SCORE</button>
            <div className="text">
                { !complete ? `Please answer all 6 questions` 
                : score < 4 ? "ADHD unlikely" 
                : score < 6 ? "ADHD possible" 
                : "ADHD likely" }
            </div>
        </div>
    )
}

export default Score