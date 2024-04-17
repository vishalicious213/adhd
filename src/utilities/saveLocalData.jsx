import React from 'react'
import { useContext } from 'react'
import { Asrs1Context } from '../components/asrs1'
import { Asrs5Context } from '../components/asrs5'

const resetAsrs1State = { answer1: "", answer2: "", answer3: "", answer4: "", answer5: "", answer6: "", answer7: "", answer8: "", answer9: "", answer10: "", answer11: "", answer12: "", answer13: "", answer14: "", answer15: "", answer16: "", answer17: "", answer18: "" }
const resetAsrs5State = { answer1: "", answer2: "", answer3: "", answer4: "", answer5: "", answer6: "" }

const SaveAndDelete = ({ name, data, reset }) => {
    const { setAsrs5Complete } = useContext(Asrs5Context) || { setAsrs5Complete: () => {} }
    const { setAsrs1Complete } = useContext(Asrs1Context) || { setAsrs1Complete: () => {} }

    function save(name, data) {
        localStorage.setItem(name, JSON.stringify(data))
    }

    function remove(name, reset) {
        localStorage.removeItem(name)

        if (name === "asrs1") {
            reset(resetAsrs1State)
            setAsrs1Complete(false)
        }

        if (name === "asrs5") {
            reset(resetAsrs5State)
            setAsrs5Complete(false)
        }
    }

    return (
        <div id="save-delete">
            <button className="score-btn" onClick={() => save(name, data)}>SAVE ANSWERS</button>
            <button className="score-btn" onClick={() => remove(name, reset)}>DELETE ANSWERS</button>
        </div>
    )
}

export default SaveAndDelete