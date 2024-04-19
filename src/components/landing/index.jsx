import React from 'react'
import { useState, createContext } from 'react'
import Asrs1 from '../asrs1'
import Asrs5 from '../asrs5'
import Sasi from '../sasi'
import Sasi1 from '../sasi/Sasi1'
import Sasi2 from '../sasi/Sasi2'
import RenderSection from './RenderSection'
import { sectionsAdhdArray } from '../../data/sectionsAdhd'

const NavContext = createContext()

const Index = () => {
    const [selected, setSelected] = useState("home")

    function handleClick(choice) {
        setSelected(choice)
        window.scrollTo(0, 0)
    }

    function handleNavClick() {
        console.log("clicked")
    }

    function RenderSectionArray({ sectionArr }) {
        let data = sectionArr[0]

        return (
            <RenderSection
                key={data.name}
                name={data.name}
                def={data.def}
                links={data.links}
                tools={data.tools}
                click={handleClick}
            />
        )
    }

    return (
        <NavContext.Provider value={{ selected, handleClick }}>
            <nav>
                <div className="nav-container">
                    {/* <button onClick={() => handleClick("home")}>HOME</button> */}
                    {/* <button onClick={() => handleClick("adhd")}>ADHD</button> */}
                    <div className="trigram" onClick={handleNavClick}>☰</div>
                </div>
            </nav>

            <div id="main">{
                selected === "home" ? "" :
                selected === "adhd" ? <RenderSectionArray sectionArr={sectionsAdhdArray} /> :
                selected === "asrs1" ? <Asrs1 /> :
                selected === "asrs5" ? <Asrs5 /> :
                selected === "sasi" ? <Sasi /> :
                selected === "sasi1" ? <Sasi1 /> :
                selected === "sasi2" ? <Sasi2 /> :
                ""
                }
            </div>
        </NavContext.Provider>
    )
}

export default Index
export { NavContext }