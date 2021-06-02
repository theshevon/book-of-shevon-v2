import React, { Component } from 'react'
import "./LangButton.css"

type LangButtonProps = {
    menuOpen: boolean,
    menuActive: boolean,
    action?: () => void,
    langIndex: number,
}

class LangButton extends Component<LangButtonProps> {

    state = {
        lang : "eng"
    }

    // store this in redux store
    langs = [
        { id : "eng", sym : "ENG"},
        { id : "kor", sym : "한글" }
    ];

    setLang = (lang_id: string) => {
        this.setState({ lang : lang_id });
        // window.location.reload();
    }

    render() {

        let langOpts = (
            <div>
                { this.langs.map((lang, index) => (
                    <button
                        key={index}
                        className={lang.id === this.state.lang ? "sel-lang" : "lang"}
                        onClick={ () => this.setLang(lang.id) }
                        onKeyDown={ () => this.setLang(lang.id) }>
                        { lang.sym }
                    </button>
                ))}
            </div>
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

