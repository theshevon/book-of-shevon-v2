import React from 'react';

// custom components
import ToggleButton from './ToggleButton';
import MenuButton   from './MenuButtons/MenuButton';
import LangButton   from './MenuButtons/LangButton';

// custom css
import "./NavBar.css";

type NavBarProps = {
    active: boolean,
    showOptions: boolean,
    links: string[],
    menuOpen: boolean,
    onClickHandler: () => void,
}

class NavBar extends React.Component<NavBarProps> {

    render(){

        const { active, showOptions, links, menuOpen, onClickHandler } = this.props;

        return (

            <div>

                {/* Default menu showing only the menu options */}
                <div
                    className={ showOptions ? "navbar show" : "navbar hide" }>

                    <nav
                        className="navbar_options">

                        {/* brand deets
                        <div
                            className={ active || menuOpen ? "navbar__logo active" : "navbar__logo" }>
                            <a
                                href="/">
                                LOGO
                            </a>
                        </div> */}

                        <div
                            className="menu-buttons">

                            <MenuButton
                                menuOpen={ menuOpen }
                                menuActive={ active }
                                action={ onClickHandler }/>

                            <LangButton
                                menuOpen={ menuOpen }
                                menuActive={ active }
                                langIndex={0}/>

                        </div>


                        {/* Hamburger */}
                        <ToggleButton
                            active={ menuOpen }
                            clickHandler={ onClickHandler }/>

                    </nav>

                </div>

                {/* Drawer that shows all the navlinks */}
                <div
                    className={ menuOpen && showOptions ? "menu-wrapper-open" : "menu-wrapper" }>

                    <div
                        className="menu">

                        <ul>
                            { links.map((link, index) => (
                                <li
                                    key={ index }>
                                    <a
                                        href={ link === "home" ? "/" : `/${link}` }
                                        className="nav-link">
                                        { link.toUpperCase() }
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>
        );
    }
}

export default NavBar;

