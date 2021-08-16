import React, {Component} from "react";

class Rating extends Component {
    render() {
        const ratingScale = [1, 2, 3, 4, 5];

        return (
            <div className="apartmentRatings">
                {ratingScale.map((scale) => (
                    <i className={`fas fa-star${scale <= this.props.rating 
                        ? " colored" 
                        : ""}`} 
                    key={`star-${scale}`}></i>
                ))}
            </div>
        )
    }
}

export default Rating;
