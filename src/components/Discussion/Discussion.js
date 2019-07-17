import React, { Component } from "react";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "./Discussion.scss";
import Tags from "../../components/Tags/Tags";
import DilemmaRespondents from "../DilemmaRespondents/DilemmaRespondents";

export class Discussion extends Component {
  
  render() {
    const { dilemma = [] } = this.props;
    const { tags = [] } = dilemma;

    return (
      <div className="card m-2">
        <Link
          className="link-to"
          to={{
            pathname: `/discussion/${dilemma.id}`
          }}
        >
          {dilemma.attachment && (
            <div className="card-img">
              <img src={dilemma.attachment} alt="" />
            </div>
          )}
          <div className="dilemma-body">
            <p>{dilemma.question}</p>
            <div className="row">
              <Tags tags={tags} />
              <div className="col-sm-6 text-right">
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
          </div>
        </Link>
        <DilemmaRespondents dilemma={dilemma} />
      </div>
    );
  }
}

export default Discussion;
