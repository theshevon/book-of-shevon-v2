import React from 'react';

// custom components
import ToggleButton from './ToggleButton';
import MenuButton   from './MenuButtons/MenuButton';
import LangButton   from './MenuButtons/LangButton';

// custom css
import "./NavBar.css";

class NavBar extends React.Component {

    render(){

        const { active, showOptions, links, menuOpen } = this.props;

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
                                className="px-2"
                                menuOpen={ menuOpen }
                                menuActive={ active }
                                action={ this.props.clickHandler }/>

                            <LangButton
                                className="px-2"
                                menuOpen={ menuOpen }
                                menuActive={ active }
                                langIdx={1}
                                action={ null }/>

                        </div>


                        {/* Hamburger */}
                        <ToggleButton
                            active={ menuOpen }
                            clickHandler={ this.props.clickHandler }/>

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
                                        href={ link !== "home" ? `/${link}` : '/' }
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

