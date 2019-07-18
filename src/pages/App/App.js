import React , { Component }from 'react';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Discussions from '../Discussions/Discussions';
import AddDilemma from '../AddDilemma/AddDilemma';

import DilemmaDetails from "../../pages/DilemmaDetails/DilemmaDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="dilemma-section">
          <Route exact path="/" component={Discussions} />
          <Route path="/add-dilemma" component={AddDilemma} />
          
          <Route path="/discussion/:id" component={DilemmaDetails}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
