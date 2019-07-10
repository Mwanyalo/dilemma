import React , { Component }from 'react';
import './App.scss';
import Discussions from './Discussions';

class App extends Component {

  render() {
    return (
        <div className="constainer-fluid">
          <div className="dilemma-section">
              <Discussions />
          </div>
        </div>
    );
  }
}

export default App;
