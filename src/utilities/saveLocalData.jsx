import React from 'react'

const asrs1State = {
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: "",
    answer6: "",
    answer7: "",
    answer8: "",
    answer9: "",
    answer10: "",
    answer11: "",
    answer12: "",
    answer13: "",
    answer14: "",
    answer15: "",
    answer16: "",
    answer17: "",
    answer18: "",
}

const LocalData = ({ name, data, reset }) => {
    function save(name, data) {
        console.log("SAVE TO LOCALSTORAGE", name, data)
        localStorage.setItem(name, JSON.stringify(data))
    }

    function remove(name, reset) {
        console.log("DELETING FROM LOCALSTORAGE")
        localStorage.removeItem(name)
        console.log(localStorage.getItem(name))

        if (name === "asrs1") {
            reset(asrs1State)
        }
    }

    return (
        <div id="save-delete">
            <button className="score-btn" onClick={() => save(name, data)}>SAVE ANSWERS</button>
            <button className="score-btn" onClick={() => remove(name, reset)}>DELETE ANSWERS</button>
        </div>
    )
}

export default LocalData