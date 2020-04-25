import React from 'react';

import "../stylesheets/code-repo.css"

const CodeRepo = (props) => {

    const { title, imgSrc, desc, stack, other_contributors, link } = props

    let tech_stack = (

        <div
            className="repo-tech-stack-container">

            <h6
                className="repo-subheading">
                Tech Stack
            </h6>

            <ul
                className="repo-tech-stack">

                { stack.map((tech, index) => (

                    <li
                        key={ index }
                        className={ `capsule ${ tech.toLowerCase().replace('.', '').replace('#', "sharp")}` }>
                        { tech }
                    </li>

                ))}

            </ul>

        </div>
    )

    let contributors = null;
    if (other_contributors.length > 0){

        contributors = (

            <div
                className="repo-contributors-container">

                <h6
                    className="repo-subheading">
                    Other Contributors
                </h6>

                <ul
                    className="repo-contributors">

                    { other_contributors.map((contributor, index) => (

                        <li
                            key={ index }>
                            <a
                                href={ contributor.github }>
                                { contributor.name }
                            </a>
                        </li>

                    ))}

                </ul>

            </div>
        )
    }

    return (
        <div
            className="code-repo">

            <h3
                className="repo-title">
                { title }
            </h3>

            <img
                src={ imgSrc }
                alt={`${title} cover`}
                className="repo-img"/>

            <h6
                className="repo-subheading">
                Description
            </h6>

            <p
                className="repo-desc">
                { desc }
            </p>

            { tech_stack }

            { contributors }

            <button
                className="repo-btn">
                <a
                    href= { link }
                    target="_blank"
                    rel="noopener noreferrer">
                    Link
                </a>
            </button>

        </div>
    )
}

export default CodeRepo;
