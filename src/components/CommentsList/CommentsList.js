import React from "react";
import { connect } from "react-redux";
import { FiShare2, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { fetchComments, fetchReplies } from "../../store/actions/commentsActions";
import "./CommentsList.scss";
import Replies from "../RepliesList/RepliesList";
import NewReplies from "../RepliesCreate/RepliesCreate";

const AllReplies = ({ item }) => {
  const { replies = [] } = item;
  return (
    <div className="col m-3">
      {replies.map((reply, i) => (
        <Replies reply={reply} key={i} />
      ))}
      <NewReplies comment={item} />
    </div>
  );
};
class CommentList extends React.Component {
  state = { clicks: 0, show: true };

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    this.props.fetchComments();
    this.props.fetchReplies();
  }

  renderComments() {
    return this.props.comments.map((comment, i) => {
      return (
        <div
          key={i}
          className="card-main"
          style={{ position: "relative", top: "10px" }}
        >
          <div className="row" id="main-content">
            <div className="text-center">
              <img
                alt=""
                src="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg"
                className="thumbnail rounded-circle"
              />
            </div>
            <div style={{ width: "75%" }}>
              <div className="userId">{comment.name}</div>
              <div className="text">
                <p> {comment.description}</p>
              </div>
            </div>
          </div>

          <div className="footer-icons">
            <div className="row">
              <div
                className="col"
                onClick={this.IncrementItem}
                style={{ cursor: "pointer" }}
              >
                <FiThumbsUp />
                <span>{this.state.clicks}</span> Upvote
              </div>
              <div
                className="col"
                onClick={this.DecreaseItem}
                style={{ cursor: "pointer" }}
              >
                <FiThumbsDown />
                <span>{this.state.clicks}</span> Downvote
              </div>
              <div className="col" style={{ cursor: "pointer" }}>
                <FiShare2 /> share
              </div>
            </div>
          </div>

          <div className="row">
            <AllReplies item={comment} />
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="card">{this.renderComments()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    comments: Object.values(state.comments),
    count: state.count,
    replies: Object.values(state.replies)
  };
};
export default connect(
  mapStateToProps,
  { fetchComments, fetchReplies }
)(CommentList);
