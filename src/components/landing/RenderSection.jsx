import React from 'react'

function renderTool({ tool, choice }) {
    return (
        <div key={tool}>
            <div>{tool}</div>
            <div>{choice}</div>
        </div>
    )
}

const RenderSection = ({ name="name", def="Definition", tools="Tools", links="Links" }) => {
    return (
        <section className="section">
            <h2>{name}</h2>
            <p className="definition text">{def}</p>
            <div className="tools">{tools.map(tool => renderTool(tool))}</div>
            <div className="links text">{links}</div>
        </section>
    )
}

export default RenderSection