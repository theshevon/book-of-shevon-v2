import React from 'react';

import "../stylesheets/repo.css"

const RepoModal = (props) => {

    const { title, imgSrc, desc, stack, other_contributors, link } = props

    let tech_stack = (

        <div
            className="repo-tech-stack-container">

            <h4
                className="repo-subheading">
                Tech Stack
            </h4>

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

                <h4
                    className="repo-subheading">
                    Other Contributors
                </h4>

                <ul
                    className="repo-contributors">

                    { other_contributors.map((contributor, index) => (

                        <li
                            key={ index }
                            className="contributor capsule">
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

            <h4
                className="repo-title">
                { title }
            </h4>

            {/* <img
                src={ imgSrc }
                alt={`${title} cover`}
                className="repo-img"/> */}

            <h4
                className="repo-subheading">
                Description
            </h4>

            <p
                className="repo-desc">
                { desc }
            </p>

            { tech_stack }

            { contributors }


            <a
                href= { link }
                target="_blank"
                rel="noopener noreferrer"
                className="repo-btn">
                View Repo
            </a>

        </div>
    )
}

export default RepoModal;
