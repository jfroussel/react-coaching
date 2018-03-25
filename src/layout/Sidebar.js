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
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label text-muted small text-capitalize pl-2" for="defaultCheck1">
                        javascript
                    </label>
                    <span className="float-right small pt-1 text-info">15</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label text-muted small text-capitalize pl-2" for="defaultCheck1">
                        reactjs
                    </label>
                    <span className="float-right small pt-1 text-info">8</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label text-muted small text-capitalize pl-2" for="defaultCheck1">
                        angular
                    </label>
                    <span className="float-right small pt-1 text-info">19</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label text-muted small text-capitalize pl-2" for="defaultCheck1">
                        fullstack js
                    </label>
                    <span className="float-right small pt-1 text-info">5</span>
                </div>
                <hr />
                <div className="text-gray text-capitalize small font-weight-light pb-2">programming</div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label text-muted small text-capitalize pl-2" for="defaultCheck1">
                        javascript
                    </label>
                    <span className="float-right small pt-1 text-info">15</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label text-muted small text-capitalize pl-2" for="defaultCheck1">
                        reactjs
                    </label>
                    <span className="float-right small pt-1 text-info">8</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label text-muted small text-capitalize pl-2" for="defaultCheck1">
                        angular
                    </label>
                    <span className="float-right small pt-1 text-info">19</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label text-muted small text-capitalize pl-2" for="defaultCheck1">
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