import React from 'react';

import "./ToggleButton.css";

type ToggleButtonProps = {
    active: boolean,
    clickHandler: () => void,
}

const toggleButton = (props: ToggleButtonProps) => {

    let class_ = "line";
    if (props.active) class_ += " active";

    return (
        <button
            className="toggle-button"
            onClick={ props.clickHandler }>
            <div
                className={ class_ }>
            </div>
        </button>
    );
}

export default toggleButton;