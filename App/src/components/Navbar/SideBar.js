import React from 'react';

// custom css
import "./Drawer.css";

const Drawer = props => {

    let { show, type, links } = props;

    let classes = "drawer " + type + "-drawer";
    if (show){
        classes += " " + type + "-drawer-open";
    }

    // alert("drawer bottom-drawer bottom-drawer-open" === classes);
    // console.log(classes);
    // console.log("drawer bottom-drawer bottom-drawer-open");


    let navLinks = (
        <ul>
            { links.map((link, index) => (
                <li
                    key={ index }>
                    <a
                        href={ link }>
                        { link }
                    </a>
                </li>
            ))}
        </ul>
    );

    return (

        <nav
            className={ classes }>
            { navLinks }
        </nav>
    )
}

export default Drawer;
