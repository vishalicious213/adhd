import React from 'react'

const LocalData = ({ name, data }) => {
    function save(name, data) {
        console.log("SAVE TO LOCALSTORAGE", name, data)
        localStorage.setItem(name, JSON.stringify(data))
    }
    
    function load(name) {
        let savedData = JSON.parse(localStorage.getItem(name))
        console.log("LOAD FROM LOCALSTORAGE", savedData)
        console.log("real data", localStorage.getItem(name))
        console.log("fake data", localStorage.getItem("name"))
        if (localStorage.getItem(name)) {console.log("there's data")}
    }

    function remove(name) {
        console.log("DELETING FROM LOCALSTORAGE")
        localStorage.removeItem(name)
        console.log(localStorage.getItem(name))
    }

    return (
        <div id="score">
            <button className="score-btn" onClick={() => save(name, data)}>SAVE</button>
            <button className="score-btn" onClick={() => load(name)}>LOAD</button>
            <button className="score-btn" onClick={() => remove(name)}>DELETE</button>
        </div>
    )
}

export default LocalData