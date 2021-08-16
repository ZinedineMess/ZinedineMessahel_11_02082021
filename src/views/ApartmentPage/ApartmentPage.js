import React, {Component} from 'react';
import './ApartmentPage.css';
import Carousel from '../../components/Carousel/Carousel';
import Title from '../../components/Title/Title';
import Tag from '../../components/Tag/Tag';
import Location from '../../components/Location/Location';
import Profil from '../../components/Profil/Profil';
import Rating from '../../components/Rating/Rating';
import Collapsible from '../../components/Collapsible/Collapsible';
import { Redirect } from "react-router-dom";

class ApartmentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartment: this.getApartment(),
        }
    }

    getApartment = () => {
        const apartment = this.props.apartments.filter(
            (apt) => apt.id === this.props.match.params.id
        )

        return apartment[0]
    }

    getTags = () => {
        return (
            <div className="apartmentTagsBox">
                {this.state.apartment.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}
            </div>
        )
    }

    getCollapsibles = () => {
        return (
            <section className="apartmentCollapsible">
                <Collapsible title='Description' content={this.state.apartment.description}/>
                <Collapsible title='Équipements' content={this.state.apartment.equipments}/>
            </section>
        )
    }

    render() {
        if (!this.props.apartments.some((apt) => apt.id === this.props.match.params.id)) return <Redirect to="/404" />

        return (
            <main>
                <Carousel pictures={this.state.apartment.pictures}/>
                <section className="apartmentInformations">
                    <div className="apartmentBox">
                        <Title title={this.state.apartment.title}/>
                        <Location location={this.state.apartment.location}/>
                        {this.getTags()}
                    </div>
                    <div className="apartmentBoxAside">
                        <Profil host={this.state.apartment.host}/>
                        <Rating rating={this.state.apartment.rating}/>
                    </div>
                </section>
                {this.getCollapsibles()}
            </main>
        )
    }
}

export default ApartmentPage;
