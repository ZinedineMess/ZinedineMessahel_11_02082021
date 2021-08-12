import React, {Component} from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import {data} from '../../datas/data';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <main>
                <HeroBanner />
                <section className="galleryApartmentCard">
                    {data.map((apartment) => {
                        return <ApartmentCard key={apartment.id} id={apartment.id} cover={apartment.cover} title={apartment.title} />
                    })}
                </section>
            </main>
        )
    }
}

export default HomePage;
