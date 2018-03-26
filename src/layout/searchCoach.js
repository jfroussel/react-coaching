import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../firebase';


class SearchCoach extends Component {

    constructor(props) {

        super(props);
        this.state = {
            categoriesList: {},
        }
    }

    componentDidMount() {

        this.firebaseRef = firebase.database().ref().child('categories');
        this.firebaseCallback = this.firebaseRef.on('value', snap => {
            this.setState({ categoriesList: Object.keys(snap.val()) });
            //console.log(this.state.categoriesList);
        });
    }

    
    render() {
        const categories = this.state.categoriesList;
        const todoItems = Object.values(categories).map((category, index) =>
            // Only do this if items have no stable IDs
            <a className="dropdown-item" href="" key={index}>{category}</a>
            
        );
        
        return (
            
            <form className="form-inline my-2 my-lg-0 ">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle text-white small"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >Search your coach</button>
                        <div className="dropdown-menu">
                            {todoItems}
                        </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Go !</button>
                </div>
            </form>

        )
    }
}
export default SearchCoach;