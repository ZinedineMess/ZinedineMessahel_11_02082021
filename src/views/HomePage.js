import React, {Component} from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Gallery from '../components/Gallery/Gallery';

class HomePage extends Component {
    render() {
        return (
            <main>
                <HeroBanner />
                <Gallery />
            </main>
        )
    }
}

export default HomePage;