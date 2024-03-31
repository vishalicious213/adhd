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


        if (scores.answer1 === "sometimes" || scores.answer1 === "often" || scores.answer1 === "very-often") {
            adhdScore = adhdScore + 1            
        }

        if (scores.answer2 === "sometimes" || scores.answer2 === "often" || scores.answer2 === "very-often") {
            adhdScore = adhdScore + 1
        }

        if (scores.answer3 === "sometimes" || scores.answer3 === "often" || scores.answer3 === "very-often") {
            adhdScore = adhdScore + 1
        }

        if (scores.answer4 === "often" || scores.answer4 === "very-often") {
            adhdScore = adhdScore + 1
        }

        if (scores.answer5 === "often" || scores.answer5 === "very-often") {
            adhdScore = adhdScore + 1
        }

        if (scores.answer6 === "often" || scores.answer6 === "very-often") {
            adhdScore = adhdScore + 1
        }

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