import React from 'react'

import Instructions from './Instructions'
import SasiFooter from './SasiFooter'

const Sasi = ({ onclick }) => {
    return (
        <>
            <Instructions onclick={onclick} />
            <SasiFooter onclick={onclick} />
        </>
    )
}

export default Sasi