import React , { Component }from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiMessageCircle } from "react-icons/fi";

import './App.scss';
import Discussions from './components/Discussions';

class App extends Component {

  constructor() {
    super();
    this.state = {
      dilemmas: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3004/questions"
    axios.get(url)
      .then(res => {
        const dilemmas =  res.data
        this.setState({ dilemmas });
      })
     .catch(error =>{
       console.log(error)
     })
  }

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
          {this.state.dilemmas.map((dilemma, i) => (
            <Discussions key={i} dilemma={dilemma} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
