import React, { Component } from 'react';
import './App.css';
import HeaderNav from './layout/HeaderNav';
import Sidebar from './layout/Sidebar';
import Content from './layout/Content';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <div className="row py-5">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
