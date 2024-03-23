import React from 'react'

const Score = () => {

    function getScore() {
        console.log("clicked")
    }
    return (
        <>
            <button onClick={getScore}>SCORE</button>
        </>
    )
}

export default Score