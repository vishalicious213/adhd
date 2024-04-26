import React from 'react'
import { useContext, useState } from 'react'
import { AQContext } from '.'

const Score = ({ scores }) => {
    const { aqScore, setAqScore, aqComplete, setAqComplete } = useContext(AQContext)
    const [unfinishedQuestions, setUnfinishedQuestions] = useState(50)
    const agree = [2, 4, 5, 6, 7, 9, 12, 13, 16, 18, 19, 20, 21, 22, 23, 26, 33, 35, 39, 41, 42, 43, 45, 46]
    const disagree = [1, 3, 8, 10, 11, 14, 15, 17, 24, 25, 27, 28, 29, 30, 31, 32, 34, 36, 37, 38, 40, 44, 47, 48, 49, 50]
    let workingScore = 0
    let socialSkillScore = 0
    let attentionSwitchingScore = 0
    let attentionToDetailScore = 0
    let communicationScore = 0
    let imaginationScore = 0
    const socialSkillArr = [1, 11, 13, 15, 22, 36, 44, 45, 47, 48]
    const attentionSwitchingArr = [2, 4, 10, 16, 25, 32, 34, 37, 43, 46]
    const attentionToDetailArr = [5, 6, 9, 12, 19, 23, 28, 29, 30, 49]
    const communicationArr = [7, 17, 18, 26, 27, 31, 33, 35, 38, 39]
    const imaginationArr = [3, 8, 14, 20, 21, 24, 40, 41, 42, 50]
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

            // tally social-skill subscore
            if (socialSkillArr.includes(i + 1)) {
                //agree
                if ([13, 22, 45].includes(i + 1) 
                    && (scores[item] === "def-agree" 
                    || scores[item] === "slight-agree")) {
                        console.log("social agree++", scores[item], i + 1)
                        socialSkillScore++
                // disagree
                } else if ([1, 11, 15, 36, 44, 47, 48].includes(i + 1) 
                    && (scores[item] === "def-disagree" 
                    || scores[item] === "slight-disagree")) {
                        console.log("social disagree++", scores[item], i +1)
                        socialSkillScore++
                }
            }
            
            // tally imagination subscore
            if (imaginationArr.includes(i + 1)) {
                //agree
                if ([20, 21, 41, 42].includes(i + 1) 
                    && (scores[item] === "def-agree" 
                    || scores[item] === "slight-agree")) {
                        console.log("imagine agree++", scores[item], i + 1)
                        imaginationScore++
                //disagree
                } else if ([3, 8, 14, 24, 40, 50].includes(i + 1) 
                    && (scores[item] === "def-disagree" 
                    || scores[item] === "slight-disagree")) {
                        console.log("imagine disagree++", scores[item], i +1)
                        imaginationScore++
                }
            }
        }

        setAqScore(workingScore)
        console.log("social-skill", socialSkillScore)
        console.log("imagination", imaginationScore)
    }

    return (
        <div id="score">
            <button className='score-btn' onClick={getScore}>GET SCORE</button>
            <div className='text'>
                { !aqComplete ? `Please answer remaining ${unfinishedQuestions} questions`
                : `Score is ${aqScore}`
                }
            </div>
        </div>
    )
}

export default Score