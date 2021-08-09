import React, {Component} from 'react';
import './Collapsible.css';

class Collapsible extends Component {
    state = {
        show : false,
        className: 'isClose',
    }

    showContent = () => {
        this.setState({
            show : !this.state.show
        })
        this.state.show 
        ? this.setState({ className: 'isClose' })
        : this.setState({ className: 'isOpen' })
    }

    render() {
        return (
            <article className="collapsibleArticle">
                <div 
                className={`collapsibleVisible ${this.state.className}`}
                onClick={this.showContent}>
                    <h3>{this.props.title}</h3>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div 
                className={`collapsibleContent ${this.state.className}`}
                >
                    <p>{this.props.content}</p>
                </div>
            </article>
        )
    }
}

export default Collapsible;
