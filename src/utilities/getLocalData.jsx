import React from 'react'

const LocalData = ({ name, data }) => {
    function save(name, data) {
        console.log("SAVE TO LOCALSTORAGE", name, data)
        localStorage.setItem(name, JSON.stringify(data))
    }
    
    function load(name) {
        let savedData = JSON.parse(localStorage.getItem(name))
        console.log("LOAD FROM LOCALSTORAGE", savedData)
    }

    return (
        <div id="score">
            <button className="score-btn" onClick={() => save(name, data)}>SAVE</button>
            <button className="score-btn" onClick={() => load(name)}>LOAD</button>
        </div>
    )
}

export default LocalData