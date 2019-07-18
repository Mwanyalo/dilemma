import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { FiSend } from "react-icons/fi";

import { connect } from "react-redux";
import { createReply } from "../../store/actions/commentsActions";
import "./RepliesCreate.scss";

class RepliesCreate extends Component {
  commentId = this.props.comment.id;
  comment = this.props.comment;

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, id, meta }) => {
    const className = `field $(meta.error && meta.touched ? 'error: '')`;
    return (
      <div className={className}>
        <input
          {...input}
          autoComplete="off"
          style={{  }}
          type="text"
          placeholder="Write your reply here!"
          id="input-field"
        />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = formValues => {
    this.comment.replies.push(formValues);
    this.props.createReply(this.comment, this.commentId);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="description"
          component={this.renderInput}
          placeholder="write your comment here"
          className="description_field"
        />
        <FiSend
          onClick={this.props.handleSubmit(this.onSubmit)}
          className="replies-send-btn"
        />
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.reply) {
    errors.reply = " please write your reply";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "replyCreate",
  validate: validate
})(RepliesCreate);

export default connect(
  null,
  { createReply }
)(formWrapped);
