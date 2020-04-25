import React from 'react';

// custom components
import NavBar  from "./NavBar";

/**
 * Represents a responsive navbar that changes in appearance based on whether
 * or not the page has been scrolled.
 */
class MainNavBar extends React.Component {

    constructor(){
        super()
        this.state = {
            showMenu  : false,
        }
    }

    drawerClickHandler = () => {
        this.setState(prevState => {
            return { showMenu : !prevState.showMenu }
        });
    }

    render() {

        const navLinks = ["about", "code", "home", "blog", "music"];

        return (

            <div>
                <NavBar
                    links={ navLinks }
                    menuOpen={ this.state.showMenu }
                    clickHandler={ this.drawerClickHandler }/>
            </div>
        );
    }
}

export default MainNavBar;
