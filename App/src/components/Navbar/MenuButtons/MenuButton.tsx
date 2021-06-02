import React from 'react';

import "./MenuButton.css";

type MenuButtonProps = {
    menuOpen: boolean,
    menuActive: boolean,
    action: () => void,
}

const MenuButton = (props: MenuButtonProps) => {

    let { menuOpen, menuActive, action } = props;

    let text = menuOpen ? "CLOSE" : "MENU";
    let classes = (menuActive || menuOpen) ? "menu-btn menu-btn-act" : "menu-btn";

    return (
        <button
            className={ classes }
            onClick={ action }
            onKeyDown={ action }>
            { text }
        </button>
    );
}

export default MenuButton;
