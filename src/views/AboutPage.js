import React, {Component} from 'react';
import Collapsible from '../components/Collapsible/Collapsible';
import AboutBanner from '../components/AboutBanner/AboutBanner';
import {aboutData} from '../datas/aboutData';

class AboutPage extends Component {
    render() {
        return (
            <main>
                <AboutBanner />
                {aboutData.map((data) => (
                    <Collapsible key={data.id} title={data.title} content={data.content} />
                ))
                }
            </main>
        )
    }
}

export default AboutPage;
