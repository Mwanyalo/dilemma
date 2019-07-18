import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { FiSend } from "react-icons/fi";

import { connect } from "react-redux";
import {createComment } from "../../store/actions/commentsActions";
import "./CommentCreate.scss";

class CommentCreate extends Component {
  renderError({ error, onSubmit }) {
    if (onSubmit && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, id, meta }) => {
    const className = `field $(meta.error && meta.touched ? 'error: '')`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete="off"
          type="text"
          placeholder="Write comment here!"
          id="input-field"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // e.preventDefault();
    const model = formValues;
    model.replies = [];
    this.props.createComment(formValues);
  };

  render() {
    return (
      <form
        className="ui form error"
        onClick={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="description"
          component={this.renderInput}
          placeholder="write your comment here"
          className="description_field"
        />
        <FiSend className="send-btn" />
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.description) {
    errors.description = " you must write a comment";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "commentCreate",
  validate: validate
})(CommentCreate);

export default connect(
  null,
  { createComment }
)(formWrapped);
