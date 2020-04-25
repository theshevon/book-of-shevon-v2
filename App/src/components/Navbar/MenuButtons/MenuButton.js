import React from 'react';

import "./MenuButton.css";

const MenuButton = (props) => {

    let { menuOpen, menuActive, action } = props;

    let text = menuOpen ? "CLOSE" : "MENU";
    let classes = (menuActive || menuOpen) ? "menu-btn menu-btn-act" : "menu-btn";

    return (
        <button
            className={ classes }
            onClick={ action }>
            { text }
        </button>
    );
}

export default MenuButton;
