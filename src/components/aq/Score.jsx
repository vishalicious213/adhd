import React from 'react'

const Score = ({ scores }) => {
    console.log(scores)
    console.log(scores.answer50)

    for (let i = 0; i < 50; i++) {
        let item = `answer${i + 1}`
        // console.log(item)
        console.log(scores[item])
    }

    return (
        <div>
            <div>Autism Score</div>

        </div>
    )
}

export default Score

// “Definitely agree” or “Slightly agree” responses to questions 2, 4, 5, 6, 7, 9, 12, 13, 16, 18, 19, 20, 21, 22, 23, 26, 33, 35, 39, 41, 42, 43, 45, 46 score 1 point.

// “Definitely disagree” or “Slightly disagree” responses to questions 1, 3, 8, 10, 11, 14, 15, 17, 24, 25, 27, 28, 29, 30, 31, 32, 34, 36, 37, 38, 40, 44, 47, 48, 49, 50 score 1 point.