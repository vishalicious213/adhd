import React from 'react'

const RenderSection = ({ def="Definition", tools="Tools", links="Links" }) => {
    return (
        <section className="section">
            <div className="definition text">{def}</div>
            <div className="tools">{tools}</div>
            <div className="links text">{links}</div>
        </section>
    )
}

export default RenderSection