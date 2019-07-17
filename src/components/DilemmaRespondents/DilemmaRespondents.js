import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FiRss, FiMessageCircle } from "react-icons/fi";
import { updateDilemma } from "../../store/actions/dilemmaActions";
import "./DilemmaRespondents.scss";

export class DilemmaRespondents extends Component {

  dilemma = [];
  user = { "id": 2}
  followStyle = ''

  constructor(props){
    super(props)
    this.dilemma = props.dilemma;
    if (this.dilemma.followers.find(e => {return e === this.user.id})) {
      this.followStyle = "follow"
    } else {
      this.followStyle = "unfollow"
    }
  }
  
  subscribe = () => {
    if (this.dilemma.followers.find(e => {return e === this.user.id})) {
      this.dilemma.followers.splice( this.dilemma.followers.indexOf(this.user.id), 1 );
      this.props.updateDilemma(this.dilemma);
      this.followStyle = "unfollow"
    } else {
      this.dilemma.followers.push(this.user.id);
      this.props.updateDilemma(this.dilemma);
      this.followStyle = "follow"
    }
  };

  render() {
    
    return (
      <div className="dilemma-footer">
      <div>
        <small className="card-reply">
          <span className="reply-icon">
            <FiMessageCircle /> Replies
          </span>
          <span className="reply-counter">12</span>
        </small>
        <small
          className={this.followStyle === 'unfollow' ? "unfollow" : "follow"}
          onClick={this.subscribe}
        >
          <span className="follow-icon">
            <FiRss /> Follow
          </span>
          <span className="follow-counter">{ this.dilemma.followers.length}</span>
        </small>
      </div>
    </div>
    )
  }
}


DilemmaRespondents.propTypes = {
  updateDilemma: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateDilemma }
)(DilemmaRespondents);
