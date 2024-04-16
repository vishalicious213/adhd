import React from 'react'
import { useContext, useEffect } from 'react'
import { Asrs5Context } from '.'

const Score = ({ scores }) => {
    const { asrs5Score, setAsrs5Score, asrs5Complete, setAsrs5Complete } = useContext(Asrs5Context)

    // if form data is saved calculate score with it on page load
    useEffect(() => {
        if (localStorage.getItem("asrs5")) {
            scores = JSON.parse(localStorage.getItem("asrs5"))
            getScore()
        }
    }, [])

    function getScore() {
        let adhdScore = 0
        let scoresArray = Object.values(scores)
        let unfinishedQuestions = 6
        setAsrs5Complete(false)

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
            setAsrs5Score(adhdScore)
            setAsrs5Complete(true)
        }
    }

    return (
        <div id="score">
            <button className="score-btn" onClick={getScore}>SCORE</button>
            <div className="text">
                { !asrs5Complete ? `Please answer all 6 questions`
                : asrs5Score >= 14 ? `Score of ${asrs5Score} suggests ADHD is possible` 
                : `Score of ${asrs5Score} suggests ADHD is unlikely` }
            </div>
        </div>
    )
}

export default Score