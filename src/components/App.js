import React , { Component }from 'react';
import { Link } from 'react-router-dom';
import { FiMessageCircle } from "react-icons/fi";
import './App.scss';
import Discussions from './Discussions';

class App extends Component {

  render() {
    return (
        <div className="constainer-fluid">
          <div className="dilemma-section">
            <div className="header">
              <h4>Discussions</h4>
            </div>
            <div id="mybutton">
              <Link className="btn float-button rounded-circle" to="/add-question"><FiMessageCircle /></Link> 
            </div>
              <Discussions />
          </div>
        </div>
    );
  }
}

export default App;
