import React, { Component } from "react";
import { FiEye, FiRss, FiMessageCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "./Discussion.scss";
import Tags from "../../components/Tags/Tags";

export class Discussion extends Component {

  render() {
    const { dilemma = [] } = this.props;
    const { tags = [] } = dilemma;
    return (
      <Link
        className="link-to"
        to={{
          pathname: `/discussion/${dilemma.id}`
        }}
      >
        <div className="card m-2">
          {dilemma.attachment && (
            <div className="card-img">
              <img src={dilemma.attachment} alt="" />
            </div>
          )}
          <div className="card-body">
            <p>{dilemma.question}</p>
            <div className="row">
              <Tags tags={tags} />
              <div className="col-md-4 col-sm-6 text-right">
                <span className="text-muted">
                  <small>
                    <FiEye />
                    {dilemma.views} Views
                  </small>
                </span>
                <span className="ml-3 text-muted">
                  <small>
                    <Moment fromNow ago>
                      {dilemma.createdDate}
                    </Moment>
                  </small>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <small className="card-reply">
                  <span className="reply-icon">
                    <FiMessageCircle /> Replies
                  </span>
                  <span className="reply-counter">12</span>
                </small>
                <small className="card-follow">
                  <span className="follow-icon">
                    <FiRss /> Follow
                  </span>
                  <span className="follow-counter">2300</span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Discussion;
