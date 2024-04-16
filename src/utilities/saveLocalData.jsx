import React from 'react'

const LocalData = ({ name, data }) => {
    function save(name, data) {
        console.log("SAVE TO LOCALSTORAGE", name, data)
        localStorage.setItem(name, JSON.stringify(data))
    }

    function remove(name) {
        console.log("DELETING FROM LOCALSTORAGE")
        localStorage.removeItem(name)
        console.log(localStorage.getItem(name))
    }

    return (
        <div id="save-delete">
            <button className="score-btn" onClick={() => save(name, data)}>SAVE ANSWERS</button>
            <button className="score-btn" onClick={() => remove(name)}>DELETE ANSWERS</button>
        </div>
    )
}

export default LocalData