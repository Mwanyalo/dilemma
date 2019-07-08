import React, { Component } from "react";
import { FiEye, FiRss, FiMessageCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import "./Discussions.scss";

export class Discussions extends Component {

  render() {
    return (
      <Link className="link-to" to={{
        pathname: `/question/${this.props.dilemma.id}`}}>
      <div className="card m-2">
        {this.props.dilemma.attachment && (
          <div className="card-img">
            <img src={this.props.dilemma.attachment} alt="" />
          </div>
        )}
        <div className="card-body">
          <p> {this.props.dilemma.question} </p>
          <div className="float-left">
            <span className="tag-pill">
              <small>Relationship</small>
            </span>
            <span className="tag-pill">
              <small>Education</small>
            </span>
            <span className="tag-pill">
              <small>Drugs</small>
            </span>
          </div>
          <div className="float-right">
            <span className="text-muted">
              <small>
                <FiEye />
                {this.props.dilemma.views} Views
              </small>
            </span>
            <span className="ml-3 text-muted">
              <small>{this.props.dilemma.createdDate}</small>
            </span>
          </div>
        </div>
        <div className="ml-4 mb-2">
          <small className="card-reply">
            <FiMessageCircle /> Replies
          </small>
          <small className="card-follow">
            <FiRss /> Follow
          </small>
        </div>
      </div>
      </Link>
    );
  }
}

export default Discussions;
