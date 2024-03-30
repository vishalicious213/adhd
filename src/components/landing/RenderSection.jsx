import React from 'react'

function renderTool({ button, choice, title, desc }, click) {
    return (
        <div className="tool" key={choice}>
            <h3>{title}</h3>
            <div className="text">{desc}</div>
            <button onClick={() => click(choice)}>{button}</button>
        </div>
    )
}

const RenderSection = ({ name="name", def="Definition", tools="Tools", links="Links", click }) => {
    return (
        <section className="section">
            <h2>{name}</h2>
            <p className="definition text">{def}</p>
            <div className="tools">{tools.map(tool => renderTool(tool, click))}</div>
            <h3>Resources</h3>
            <ul>
                {links.map(link => (
                    <li key={link.name}>
                        <a 
                            className="text link" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href={link.url}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default RenderSection