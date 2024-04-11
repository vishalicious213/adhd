import { createContext, useState } from "react"

const NavContext = createContext()

export default function NavContextWrapper() {
    const [selected, setSelected] = useState("home")

    function handleRenderClick(choice) {
        setSelected(choice)
    }

    return (
        <NavContext.Provider value={{ selected, handleRenderClick }}>

        </NavContext.Provider>
    )
}

export { NavContextWrapper }