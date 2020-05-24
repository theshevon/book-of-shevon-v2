import React from 'react';

import Layout from "../components/layout";

import "../stylesheets/photography.css";

class PhotographyPage extends React.Component {

    constructor(){
        super()
        this.state = {
            images :[]
        }
    }

    importAll(r){
        let images = [];
        r.keys().forEach((item, index) => { images.push(r(item)) });
        return images;
    }

    componentDidMount(){
        const images = this.importAll(require.context('../photos', false, /\.(png|jpe?g|svg)$/));
        this.setState({images : images})
    }


    render() {

        const { images } = this.state
        let photos = (
            <div
                className="photos">
                { images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className="photo"
                    />
                ))}
            </div>
        )
        return (

            <Layout>

                <div
                    className="photog-page">

                    { photos }

                </div>

            </Layout>
        )
    }
}

export default PhotographyPage;