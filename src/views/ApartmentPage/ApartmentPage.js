import React, {Component} from 'react';
import './ApartmentPage.css';
import Carousel from '../../components/Carousel/Carousel';
import Title from '../../components/Title/Title';
import Tag from '../../components/Tag/Tag';
import Location from '../../components/Location/Location';
import Profil from '../../components/Profil/Profil';
import Rating from '../../components/Rating/Rating';
import Collapsible from '../../components/Collapsible/Collapsible';
// import {data} from '../datas/data';

class ApartmentPage extends Component {
    render() {
        return (
            <main>
                <Carousel />
                <section className="apartmentInformations">
                    <div className="apartmentBox">
                        <Title />
                        <Location />
                        <div className="apartmentTagsBox">
                            <Tag />
                            <Tag />
                            <Tag />
                        </div>
                    </div>
                    <div className="apartmentBoxAside">
                        <Profil />
                        <div className="apartmentRatings">
                            <Rating />
                            <Rating />
                            <Rating />
                            <Rating />
                            <Rating />
                        </div>
                    </div>
                </section>
                <section className="apartmentCollapsible">
                    <Collapsible />
                    <Collapsible />
                </section>
            </main>
        )
    }
}

export default ApartmentPage;
