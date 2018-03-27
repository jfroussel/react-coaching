import React, { Component } from 'react';
import { } from 'reactstrap';
import firebase from 'firebase';
import  '../firebase';


class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
           categoriesList: {},
           itemsInCategory: ["item1", "item2", "item3"],
        }

        
    }

    componentDidMount() {

        this.firebaseRef = firebase.database().ref().child('categories');
        this.firebaseCallback = this.firebaseRef.on('value', snap => {
            this.setState({ categoriesList: Object.keys(snap.val()) });
        });
    }


    render() {
        const items = this.state.itemsInCategory;
        const itemsList = items.map((item, index) => 
            
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="programming" key={index}/>
                <label className="form-check-label text-muted small text-capitalize pl-2" htmlFor="programming">
                    {item}
                </label>
                <span className="float-right small pt-1 text-info">15</span>
            </div>
            
        );

        const categories = this.state.categoriesList;
        const categoriesItems = Object.values(categories).map((category, index) =>
            <div>
                <div className="text-gray text-capitalize small font-weight-light pb-2" key={index}>{category}</div>
                {itemsList}
            </div>
        );

        
        
        
        return (
            <div className="px-5">
                <hr />
                {categoriesItems}
                <div className="text-gray text-capitalize small font-weight-light pb-2">programming</div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="programming" />
                    <label className="form-check-label text-muted small text-capitalize pl-2" htmlFor="programming">
                        javascript
                    </label>
                    <span className="float-right small pt-1 text-info">15</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="reactjs" />
                    <label className="form-check-label text-muted small text-capitalize pl-2" htmlFor="reactjs">
                        reactjs
                    </label>
                    <span className="float-right small pt-1 text-info">8</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="angular" />
                    <label className="form-check-label text-muted small text-capitalize pl-2" htmlFor="angular">
                        angular
                    </label>
                    <span className="float-right small pt-1 text-info">19</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="fullstack-js" />
                    <label className="form-check-label text-muted small text-capitalize pl-2" htmlFor="fullstack-js">
                        fullstack js
                    </label>
                    <span className="float-right small pt-1 text-info">5</span>
                </div>
                <hr />
            </div>
        )
    }
}

export default Sidebar;