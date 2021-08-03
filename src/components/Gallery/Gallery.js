import React, {Component} from 'react';
import './Gallery.css';
import ApartmentCard from '../ApartmentCard/ApartmentCard';

class Gallery extends Component {
    render() {
        return (
            <div className='gallery'>
                <ApartmentCard />
            </div>
        )
    }
}

export default Gallery;
