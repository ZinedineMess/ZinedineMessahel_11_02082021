import React, {Component} from 'react';
import Carousel from '../components/Carousel/Carousel';
import Title from '../components/Title/Title';
import Tag from '../components/Tag/Tag';
import Location from '../components/Location/Location';
import Profil from '../components/Profil/Profil';
import Rating from '../components/Rating/Rating';
import Collapsible from '../components/Collapsible/Collapsible';
// import {data} from '../datas/data';

class ApartmentPage extends Component {
    render() {
        return (
            <main>
                <Carousel />
                <Title />
                <Location />
                <Tag />
                <Profil />
                <Rating />
                <Collapsible />
                <Collapsible />
            </main>
        )
    }
}

export default ApartmentPage;
