import React from 'react'
import { useContext } from 'react'
import { NavContext } from '../landing'
import Instructions from './Instructions'
import SasiFooter from './SasiFooter'

const Sasi = ({ onclick }) => {
    const { handleClick } = useContext(NavContext)
    return (
        <>
            <Instructions onclick={onclick} />
            <SasiFooter onclick={handleClick} />
        </>
    )
}

export default Sasi