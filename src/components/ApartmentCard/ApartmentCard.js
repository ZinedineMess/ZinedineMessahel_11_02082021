import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './ApartmentCard.css';

class ApartmentCard extends Component {
    render() {
        return (
            <article>
                <Link to={`/apartment/${this.props.id}`} key={this.props.id} className='galleryApartmentBox'>
                    <img src={this.props.cover} alt={this.props.title} className='galleryApartmentImg'/>
                    <div className="galleryOpacityDiv"></div>
                    <h2>{this.props.title}</h2>
                </Link>
            </article>
        )
    }
}

export default ApartmentCard;
