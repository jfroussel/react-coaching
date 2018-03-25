import React, { Component } from 'react';
import img from '../../src/card.jpeg';
import FormComponent from '../layout/StarRating';


class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            
                <div className="col-4">
                    <div className="card rounded">
                        <img className="card-img-top" src={img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Benson george</h5>
                            <p className="card-text small">Some quick example text to build on the card title and make up.</p>
                            <div className="row">
                                <div className="col-10">
                                    <FormComponent />
                                </div>
                                <div className="col-2">    
                                    <i class="material-icons text-info">visibility</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Card;
