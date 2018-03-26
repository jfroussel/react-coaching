import React, { Component } from 'react';
import firebase from 'firebase';
import  '../firebase';

class SearchCoach extends Component {

    constructor(props) {

        super(props);
        this.state = {
            test: ['test1','test2','test3'],
        }
    }

    


    render() {

        const refCategories = firebase.database().ref().child('categories');


        console.log(refCategories);

        
        const category = Object.keys(refCategories).map((value) =>
            <a className="dropdown-item small" href="/">{value}</a>
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
                            {category}
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