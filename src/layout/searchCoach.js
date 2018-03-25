import React, { Component } from 'react';

class SearchCoach extends Component {

    constructor(props) {

        super(props);
        this.state = {

        }
    }

    render() {
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
                            <a className="dropdown-item small" href="/">Action</a>
                            <a className="dropdown-item small" href="/">Another action</a>
                            <a className="dropdown-item small" href="/">Something else here</a>
                            <div role="separator" className="dropdown-divider"></div>
                            <a className="dropdown-item small" href="/">Separated link</a>
                        </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Go!</button>
                </div>
            </form>

        )
    }
}
export default SearchCoach;