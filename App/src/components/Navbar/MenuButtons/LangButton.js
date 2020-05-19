import React, { Component } from 'react'
import "./LangButton.css"
import { translate } from "react-i18next"

class LangButton extends Component {

    state = {
        lang : "en"
    }

    // store this in redux store
    langs = [
        { code : "en", label : "ENG"},
        { code : "ko", label : "한글" }
    ];

    setLang = (code) => {
        this.setState({ lang : code });
        const { i18n } = this.props
        i18n.changeLanguage(code)
        // window.location.reload();
    }

    render() {

        let langOpts = (
            <ul>
                { this.langs.map((lang, index) => (
                    <p
                        key={index}
                        className={lang.code === this.state.lang ? "sel-lang" : "lang"}
                        onClick={ () => this.setLang(lang.code) }
                        onKeyDown={ () => this.setLang(lang.code) }>
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

