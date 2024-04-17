import React from 'react'
import { useContext, useEffect } from 'react'
import { Asrs1Context } from '.'

const Score = ({ scores }) => {
    const {asrs1Score, setAsrs1Score, asrs1Complete, setAsrs1Complete} = useContext(Asrs1Context)

    // if form data is saved calculate score with it on page load
    useEffect(() => {
        if (localStorage.getItem("asrs1")) {
            scores = JSON.parse(localStorage.getItem("asrs1"))
            getScore()
        }
    }, [])

    function getScore() {
        let adhdScore = 0
        let scoresArray = Object.values(scores)
        let unfinishedQuestions = 6
        setAsrs1Complete(false)

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
            setAsrs1Score(adhdScore)
            setAsrs1Complete(true)
        }
    }

    return (
        <div id="score">
            <button className="score-btn" onClick={getScore}>GET SCORE</button>
            <div className="text">
                { !asrs1Complete ? `Please answer all 6 questions` 
                : asrs1Score < 4 ? "ADHD unlikely" 
                : asrs1Score < 6 ? "ADHD possible" 
                : "ADHD likely" }
            </div>
        </div>
    )
}

export default Score