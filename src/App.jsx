import React from 'react'
import Instructions from './components/Instructions'
import Question from './components/Question'
import { questionsArray } from './data/questions'

const App = () => {
    return (
        <>
            <Instructions />
            {questionsArray.map(q => <Question question={q.text} num={q.id} key={q.id}/>) }
        </>
    )
}

export default App