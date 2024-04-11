import { createContext } from "react"

const NavContext = createContext()

export default function NavContext() {
    return (
        <NavContext.Provider value="">

        </NavContext.Provider>
    )
}

export { NavContext }