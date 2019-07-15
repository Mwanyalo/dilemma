import React, { Component } from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./DilemmaBtn.scss";

export class DilemmaBtn extends Component {
  render() {
    return (
      <div id="btn-add">
        <Link className="btn float-button rounded-circle" to="/add-dilemma">
          <FiMessageCircle />
        </Link>
      </div> 
    )
  }
}

export default DilemmaBtn
