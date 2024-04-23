import React from 'react'
import { useState, createContext } from 'react'
import Asrs1 from '../asrs1'
import Asrs5 from '../asrs5'
import Sasi from '../sasi'
import Sasi1 from '../sasi/Sasi1'
import Sasi2 from '../sasi/Sasi2'
import AQ from '../aq'
import RenderSection from './RenderSection'
import { sectionsAdhdArray } from '../../data/sectionsAdhd'
import { sectionsAutismArray } from '../../data/sectionsAutism'

const NavContext = createContext()

const Index = () => {
    const [selected, setSelected] = useState("home")
    const [showNav, setShowNav] = useState(false)

    function handleClick(choice) {
        setSelected(choice)
        window.scrollTo(0, 0)
        setShowNav(false)
    }

    function handleNavClick() {
        setShowNav(!showNav)
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
                    <div className="trigram" onClick={handleNavClick}>☰</div>
                    <div className={`nav-menu ${showNav ? "show-nav" : "hide-nav"}`}>
                        <div className="nav-item" onClick={() => handleClick("home")}>HOME</div>
                        <div className="nav-item" onClick={() => handleClick("adhd")}>ADHD</div>
                        <div className="nav-item" onClick={() => handleClick("autism")}>AUTISM</div>
                    </div>
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
                selected === "autism" ? <RenderSectionArray sectionArr={sectionsAutismArray} /> :
                selected === "aq" ? <AQ /> :
                ""
                }
            </div>
        </NavContext.Provider>
    )
}

export default Index
export { NavContext }