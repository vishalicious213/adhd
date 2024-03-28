import React from 'react'

const RenderSection = ({ name="name", def="Definition", tools="Tools", links="Links" }) => {
    return (
        <section className="section">
            <h2>{name}</h2>
            <p className="definition text">{def}</p>
            <div className="tools">{tools}</div>
            <div className="links text">{links}</div>
        </section>
    )
}

export default RenderSection