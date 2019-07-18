import React, { Component } from "react";
import { fetchReplies } from "../../store/actions/commentsActions";
import { FiShare2, FiThumbsDown, FiThumbsUp } from "react-icons/fi";

import { connect } from "react-redux";
import "./RepliesList.scss";

class RepliesList extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  renderReplyList() {
    const reply = this.props.reply;
    return (
      <div className="card-body ml-5" id="card-main">
        <div className="row" id="main-content">
          <div className="text-center-2">
            <img
              alt=""
              src="https://i.pinimg.com/736x/b9/fe/0b/b9fe0b9b07b04ce334d1627ff84ba103.jpg"
              className="thumbnail rounded-circle"
            />
          </div>
          <div id="content-description">
            <div className="userId">{reply.id}</div>
            <div className="text">
              <p>{reply.description}</p>
            </div>
          </div>
        </div>

        {/* <hr /> */}
        <div className="footer-icons">
          <div className="row">
            <div
              className="col"
              onClick={this.increment}
              style={{ cursor: "pointer" }}
            >
              <FiThumbsUp />
              <span>{this.state.count}</span> upvote
            </div>
            <div
              className="col"
              onClick={this.decrement}
              style={{ cursor: "pointer" }}
            >
              <FiThumbsDown />
              <span>{this.state.count}</span>downvote
            </div>
            <div className="col" style={{ cursor: "pointer" }} >
              <FiShare2 />
              share
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return <div style={{ width: "100%" }}>{this.renderReplyList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    replies: Object.values(state.replies)
  };
};
export default connect(
  mapStateToProps,
  { fetchReplies }
)(RepliesList);
