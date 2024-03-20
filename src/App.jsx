import React from 'react'
import Instructions from './components/Instructions'
import Question from './components/Question'

const App = () => {
    return (
        <>
            <Instructions />
            <Question question="1. How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?" />
        </>
    )
}

export default App