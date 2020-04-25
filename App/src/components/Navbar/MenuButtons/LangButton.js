import React, { Component } from 'react'
import "./LangButton.css"

class LangButton extends Component {

    state = {
        lang : "eng"
    }

    // store this in redux store
    langs = [
        { id : "eng", sym : "ENG"},
        { id : "kor", sym : "한글" }
    ];

    setLang = (lang_id) => {
        this.setState({ lang : lang_id });
        // window.location.reload();
    }

    render() {

        let { menuOpen, menuActive } = this.props;

        let langOpts = (
            <ul>
                { this.langs.map((lang, index) => (
                    <p
                        key={index}
                        className={lang.id === this.state.lang ? "selected-lang" : "lang"}
                        onClick={ () => this.setLang(lang.id) }>
                        { lang.sym }
                    </p>
                ))}
            </ul>
        );

        return (
            <div
                className="lang-btn">
                { langOpts }
            </div>
        );
    }
}

export default LangButton;

