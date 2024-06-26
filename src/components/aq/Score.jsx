import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { AQContext } from '.'

const Score = ({ scores }) => {
    const { aqScore, setAqScore, aqComplete, setAqComplete } = useContext(AQContext)
    const [ subscore, setSubscore ] = useState({
        social: 0,
        attentionSwitching: 0,
        attentionToDetail: 0,
        communication: 0,
        imagination: 0
    })
    const [unfinishedQuestions, setUnfinishedQuestions] = useState(50)
    const [showScore, setShowScore] = useState(false)
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

    // if form data is saved calculate score with it on page load
    useEffect(() => {
        if (localStorage.getItem("aq")) {
            scores = JSON.parse(localStorage.getItem("aq"))
            answers = Object.values(scores)
            getScore()
        }
        setShowScore(false)
    }, [])

    function getScore() {
        setAqComplete(false)
        setUnfinishedQuestions(50 - answers.length)
        setShowScore(!showScore)
        
        if (answers.length === 50 && !answers.includes("")) {
            setAqComplete(true)
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

            // tally communication subscore
            if (communicationArr.includes(i + 1)) {
                //agree
                if ([7, 18, 26, 33, 35, 39].includes(i + 1) 
                    && (scores[item] === "def-agree" 
                    || scores[item] === "slight-agree")) {
                        communicationScore++
                // disagree
                } else if ([17, 27, 31, 38].includes(i + 1) 
                    && (scores[item] === "def-disagree" 
                    || scores[item] === "slight-disagree")) {
                        communicationScore++
                }
            }

            // tally social-skill subscore
            if (socialSkillArr.includes(i + 1)) {
                //agree
                if ([13, 22, 45].includes(i + 1) 
                    && (scores[item] === "def-agree" 
                    || scores[item] === "slight-agree")) {
                        socialSkillScore++
                // disagree
                } else if ([1, 11, 15, 36, 44, 47, 48].includes(i + 1) 
                    && (scores[item] === "def-disagree" 
                    || scores[item] === "slight-disagree")) {
                        socialSkillScore++
                }
            }
            
            // tally attention-switching subscore
            if (attentionSwitchingArr.includes(i + 1)) {
                //agree
                if ([2, 4, 16, 43, 46].includes(i + 1) 
                    && (scores[item] === "def-agree" 
                    || scores[item] === "slight-agree")) {
                        attentionSwitchingScore++
                // disagree
                } else if ([10, 25, 32, 34, 37].includes(i + 1) 
                    && (scores[item] === "def-disagree" 
                    || scores[item] === "slight-disagree")) {
                        attentionSwitchingScore++
                }
            }

            // tally attention-to-detail subscore
            if (attentionToDetailArr.includes(i + 1)) {
                //agree
                if ([5, 6, 9, 12, 19, 23].includes(i + 1) 
                    && (scores[item] === "def-agree" 
                    || scores[item] === "slight-agree")) {
                        attentionToDetailScore++
                // disagree
                } else if ([28, 29, 30, 49].includes(i + 1) 
                    && (scores[item] === "def-disagree" 
                    || scores[item] === "slight-disagree")) {
                        attentionToDetailScore++
                }
            }
            
            // tally imagination subscore
            if (imaginationArr.includes(i + 1)) {
                //agree
                if ([20, 21, 41, 42].includes(i + 1) 
                    && (scores[item] === "def-agree" 
                    || scores[item] === "slight-agree")) {
                        imaginationScore++
                //disagree
                } else if ([3, 8, 14, 24, 40, 50].includes(i + 1) 
                    && (scores[item] === "def-disagree" 
                    || scores[item] === "slight-disagree")) {
                        imaginationScore++
                }
            }
        }

        setAqScore(workingScore)

        setSubscore(prevState => ({
            ...prevState,
            social: socialSkillScore,
            attentionSwitching: attentionSwitchingScore,
            attentionToDetail: attentionToDetailScore,
            communication: communicationScore,
            imagination: imaginationScore
        }))
    }

    return (
        <div id="score">
            <button className='save-btn calc-btn' title='Calculate score' onClick={getScore}>%</button>
            <section className={`text aq-score ${showScore ? "grid" : "hide"}`}>
                { !aqComplete ? `Please answer remaining ${unfinishedQuestions} questions`
                : <div>
                    <h2>{`Score is ${aqScore}`}</h2>
                    <h3 className='section-background'>Subscale scores</h3>
                    <ul>
                        <li>Communication score is <span className='aq-subscore'>{subscore.communication}</span></li>
                        <li>Attention to detail score is <span className='aq-subscore'>{subscore.attentionToDetail}</span></li>
                        <li>Attention-switching score is <span className='aq-subscore'>{subscore.attentionSwitching}</span></li>
                        <li>Social skill score is <span className='aq-subscore'>{subscore.social}</span></li>
                        <li>Imagination score is <span className='aq-subscore'>{subscore.imagination}</span></li>

                    </ul>
                  </div>
                }
                <h3 className='section-background'>Scoring information</h3>
                <ul>
                    <li>The scoring range is <span className='bold'>0 - 50</span></li>
                    <ul>
                        <li>Scores of <span className='bold'>26</span> or higher indicate a chance of autism</li>
                        <li>Lower scores indicate likeliness of no autism</li>
                    </ul>
                    <li><span className='bold'>79.3%</span> of autistic people score <span className='bold'>32</span> or higher</li>
                    <li>Most non-autistic males score <span className='bold'>17</span> on average</li>
                    <li>Most non-autistic females score <span className='bold'>15</span> on average</li>
                </ul>
                <ul>
                    <li>The subscale scoring range is <span className='bold'>0 - 10</span></li>
                    <ul>
                        <li>Higher scores on each subscale indicate more neurodivergence in each area</li>
                        <li>For example, high scores on social skills indicates more social skills deficits, and high scores on attention to detail indicates an atypical focus on details</li>
                    </ul>
                </ul>
            </section>
        </div>
    )
}

export default Score