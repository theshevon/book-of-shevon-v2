import React from 'react';

import Layout from "../components/layout";

import "../stylesheets/photography.css";

class ArtPage extends React.Component {

    constructor(){
        super()
        this.state = {
            digital : [],
            hand_drawn : [],
            posters: [],
            models: []
        }
    }

    importAll(r){
        let images = [];
        r.keys().forEach((item, index) => { images.push(r(item)) });
        return images;
    }

    componentDidMount(){
        const digital = this.importAll(require.context('../art/digital', false, /\.(png|jpe?g|svg)$/));
        const hand_drawn = this.importAll(require.context('../art/hand_drawn', false, /\.(png|jpe?g|svg)$/));
        const posters = this.importAll(require.context('../art/posters', false, /\.(png|jpe?g|svg)$/));
        const models = this.importAll(require.context('../art/models', false, /\.(png|jpe?g|svg)$/));
        this.setState({
                        digital : digital,
                        hand_drawn : hand_drawn,
                        posters: posters,
                        models : models
                    })
    }


    render() {

        const { digital, hand_drawn, posters, models } = this.state

        let arr = hand_drawn
        arr = arr.concat(digital)
        arr = arr.concat(posters)
        arr = arr.concat(models)
        let uno = (
            <div
                className="photos">
                { arr.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`artwork-${index}`}
                        className="photo"
                    />
                ))}
            </div>
        )

        return (

            <Layout>

                <div
                    className="photog-page">

                    { uno }

                </div>

            </Layout>
        )
    }
}

export default ArtPage;