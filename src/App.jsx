import React from 'react'
import Instructions from './components/Instructions'
import Question from './components/Question'

const questionsArray = [
    "1. How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
    "2. How often do you have difficulty getting things in order when you have to do a task that requires organization?",
    "3. How often do you have problems remembering appointments or obligations?",
    "4. When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
    "5. How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
    "6.How often do you feel overly active and compelled to do things, like you were driven by a motor? "
]

const App = () => {
    return (
        <>
            <Instructions />
            {questionsArray.map(q => <Question question={q} key={q}/>) }
        </>
    )
}

export default App