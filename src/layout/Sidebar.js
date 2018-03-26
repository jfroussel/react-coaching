import React, { Component } from 'react';
import { } from 'reactstrap';


class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        
        return (
            <div className="px-5">
                <hr />
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