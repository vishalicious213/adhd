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

        scoresArray.forEach(arrScore => {
            if (arrScore != "") {
                if (arrScore === "rarely") {
                    adhdScore += 1
                }
    
                if (arrScore === "sometimes") {
                    adhdScore += 2
                }
    
                if (arrScore === "often") {
                    adhdScore += 3
                }
    
                if (arrScore === "very-often") {
                    adhdScore += 4
                }

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
                : score >= 14 ? `Score of ${score} suggests ADHD is possible` 
                : `Score of ${score} suggests ADHD is unlikely` }
            </div>
        </div>
    )
}

export default Score