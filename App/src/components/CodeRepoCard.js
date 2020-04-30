import React from 'react';

import "../stylesheets/code-repo.css"

const CodeRepo = (props) => {

    const { title, imgSrc, desc, stack, other_contributors, link } = props

    return (
        <div
            className="code-repo">

            <h4
                className="repo-title">
                { title }
            </h4>

            <p
                className="repo-desc">
                { desc }
            </p>

        </div>
    )
}

export default CodeRepo;
