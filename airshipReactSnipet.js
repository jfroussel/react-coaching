imp

import $1 from '$2';
impr

import React from 'react';
imprc

import React, { Component } from 'react';
imprn

import { $1 } from 'react-native';
imprr

import { connect } from 'react-redux';
impaa

import * as $1 from '$2';
afn

$1 = ($2) => {
  $3
};
eafn

export default ($1) => {
  $2
};
enfn

export const $1 = ($2) => {
  $3
};
prom

return new Promise((resolve, reject) => {
  $1
});
rinit

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  $2
  , document.querySelector('$1')
);
rcc

class $1 extends Component {
  state = { $2 };

  render() {
    return (
      $3
    );
  }
}

export default $1;
recc

export default class $1 extends Component {
  state = { $2 };

  render() {
    return (
      $3
    );
  }
}
ris

this.state = {
  $1
};
rss

this.setState({
  $1: $2
});
rs

this.state.$1
rcpt

$1.propTypes = {
  $2
};

$1.defaultProps = {

};
rp

this.props.$1
rcon

constructor(props) {
  $1
}
rren

render() {
  return (
    $1
  );
}
rcwm

componentWillMount() {
  $1
}
rcdm

componentDidMount() {
  $1
}
rcwum

componentWillUnmount() {
  $1
}

rcwu

componentWillUpdate(nextProps) {
  $1
}
rcdu

componentDidUpdate(prevProps, prevState) {
  $1
}
rcwrp

componentWillReceiveProps(nextProps) {
  $1
}
rsc

const $1 = () => (
  $2
)

export default $1;
rhoc

import React, { Component } from 'react';

export default function(ComposedComponent) {
  class $1 extends Component {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return $1;
}
rrinit

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    $2
  </Provider>
  , document.querySelector('$1')
);
rrcr

import { combineReducers } from 'redux';
import $1 from './$2';

const rootReducer = combineReducers({
  $3
});

export default rootReducer;
rccc

import React, { Component } from 'react';
import { connect } from 'react-redux';

class $1 extends Component {
  render() {
    return (
      $2
    );
  }
}

const mapStateToProps = (state) => ({
  $3
});

export default connect(mapStateToProps)($1);
rred

export default (state = $1, action) => {
  switch(action.type) {
    case $2:
      $3
    default:
      return state;
  }
}
rmstp

const mapStateToProps = (state) => ({
  $1
});