import React from 'react'

const Score = ({ scores }) => {

    function getScore() {
        let score = 0

        if (scores.answer1 === "sometimes" || scores.answer1 === "often" || scores.answer1 === "very-often") {
            score = score + 1
        }

        if (scores.answer2 === "sometimes" || scores.answer2 === "often" || scores.answer2 === "very-often") {
            score = score + 1
        }

        if (scores.answer3 === "sometimes" || scores.answer3 === "often" || scores.answer3 === "very-often") {
            score = score + 1
        }

        if (scores.answer4 === "often" || scores.answer4 === "very-often") {
            score = score + 1
        }

        if (scores.answer5 === "often" || scores.answer5 === "very-often") {
            score = score + 1
        }

        if (scores.answer6 === "often" || scores.answer6 === "very-often") {
            score = score + 1
        }

        console.log("Score", score)
    }
    return (
        <>
            <button onClick={getScore}>SCORE</button>
        </>
    )
}

export default Score