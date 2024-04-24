import React from 'react'
import { useContext, useState } from 'react'
import { AQContext } from '.'

const Score = ({ scores }) => {
    const { aqScore, setAqScore, aqComplete, setAqComplete } = useContext(AQContext)
    const [unfinishedQuestions, setUnfinishedQuestions] = useState(50)
    const agree = [2, 4, 5, 6, 7, 9, 12, 13, 16, 18, 19, 20, 21, 22, 23, 26, 33, 35, 39, 41, 42, 43, 45, 46]
    const disagree = [1, 3, 8, 10, 11, 14, 15, 17, 24, 25, 27, 28, 29, 30, 31, 32, 34, 36, 37, 38, 40, 44, 47, 48, 49, 50]
    let workingScore = 0
    // let unfinishedQuestions = 50
    let answers = Object.values(scores)

        function getScore() {
            setAqComplete(false)
            setUnfinishedQuestions(50 - answers.length)
            
            if (answers.length === 50 && !answers.includes("")) {
                setAqComplete(true)
                console.log("COMPLETE")
        }

        for (let i = 0; i < 50; i++) {
            let item = `answer${i + 1}`

            if (agree.includes(i + 1)) {
                if (scores[item] === "def-agree" || scores[item] === "slight-agree") {
                    workingScore = workingScore + 1
                }
            }

            if (disagree.includes(i + 1)) {
                if (scores[item] === "def-disagree" || scores[item] === "slight-disagree") {
                    workingScore = workingScore + 1
                }
            }
        }
    }

    return (
        <div>
            <div>Autism Score</div>
            <button onClick={getScore}>GET SCORE</button>
            <div>
                { !aqComplete ? `Please answer remaining ${unfinishedQuestions} questions`
                : `Score is ${workingScore}`
                }
            </div>
        </div>
    )
}

export default Score