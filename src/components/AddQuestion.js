import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';

import "./AddQuestion.scss";

class AddQuestion extends Component {

  constructor(props) {
    super(props);
    this.onDrop = files => {
      this.setState({
        files: files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      });
   
    };

    this.state = {
      question: "",
      anonymous: false,
      tag: "",
      files: [],
      attachment: "",
      views: 0
    };
  }

  handleChangeQuestion = event => {
    this.setState({ question: event.target.value });
  };

  handleChangeAnonymous = event => {
    this.setState({ anonymous: event.target.checked });
  };

  handleChangeTag = event => {
    this.setState({ tag: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if(this.state.question === "" || this.state.tag === ""){
       this.error.message = "This is a required field"
    } else {
      axios.post(`http://localhost:3004/questions`, this.state)
       .then(res => {
          console.log(res.data);
        this.props.history.push('/')
      })
    }
 
  }

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {
    const files = this.state.files.map(file => (
      <div className="text-center" key={file.name}>
        <img className="img-thumbnail rounded-circle" src={file.preview} alt="" />
      </div>
    ));
    return (
      <div className="dilemma-section">
        <div className="header">
          <h4>Ask a Question</h4>
        </div>
        <div className="question-form">
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label className="custom-control" htmlFor="question">
              Start your question here!
            <textarea
              className="form-control"
              id="question"
              type="text"
              value={this.state.question}
              onChange={this.handleChangeQuestion}
              required
            />
              </label>
          </div>

          <div className="form-group ml">
            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                checked={this.state.anonymous}
                onChange={this.handleChangeAnonymous}
                className="custom-control-input"
                id="customCheck"
              />
              <label className="custom-control-label" htmlFor="customCheck">
                Post as Anonymous
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="custom-control" htmlFor="tag">
              Select Tag
            <select
              id="tag"
              className="form-control"
              value={this.state.tag}
              onChange={this.handleChangeTag}
              required
            >
              <option>Drugs</option>
              <option>Relationship</option>
              <option>Education</option>
              <option>Sex</option>
            </select>
            </label>
          </div>

          <div className="form-group">
            <label className="custom-control">ADD ATTACHMENT
            <Dropzone onDrop={this.onDrop} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <small >
                      <p className="text-muted">
                        Drag 'n' drop some files here, or click to select files
                      </p>
                      <em>(Only *.jpeg and *.png images will be accepted)</em>
                    </small>
                  </div>
                  <aside>
                    <ul>{files}</ul>
                  </aside>
                </section>
              )}
            </Dropzone>
            </label>
          </div>

          <div className="form-group text-center">
            <button className="btn question-btn" type="submit">
              Post Now
            </button>
          </div>

          </form>
        </div>
      </div>
    );
  }
}

export default AddQuestion;
