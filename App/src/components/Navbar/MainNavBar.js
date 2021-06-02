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
            showOptions : true,
            showMenu    : false,
            prevTime    : (new Date()).getTime()
        }
    }

    async componentDidMount(){

        document.addEventListener("mousemove", (e) => {
            let showOptions_;
            if (e.clientY < 120){
                showOptions_ = true;
            } else{
                showOptions_ = false;
            }
            let { showOptions, showMenu } = this.state;
            if (showOptions !== showOptions_){
                let showMenu_ = !showOptions_ ? false : showMenu;
                this.setState({ showOptions : showOptions_ });
                setTimeout(() => this.setState({showMenu : showMenu_}), 750);
            }
        })
    }

    drawerClickHandler = () => {
        this.setState(prevState => {
            return { showMenu : !prevState.showMenu }
        });
    }

    render() {

        const navLinks = ["about", "projects", "photog", "home", "blog", "youtube", "art"];

        return (

            <div>
                <NavBar
                    links={ navLinks }
                    showOptions= { this.state.showOptions }
                    menuOpen={ this.state.showMenu }
                    clickHandler={ this.drawerClickHandler }/>
            </div>
        );
    }
}

export default MainNavBar;
