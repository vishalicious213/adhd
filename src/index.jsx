import React from 'react'
import ReactDOM from 'react-dom/client'
import Instructions from './components/Instructions'

const Index = () => {
    return (
        <>
            <div>index</div>
            <Instructions />
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Index />)

export default Index