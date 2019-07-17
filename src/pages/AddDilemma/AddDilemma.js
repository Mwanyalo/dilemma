import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Select from "react-select";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { TiAttachment } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import "./AddDilemma.scss";
import { createDilemma } from "../../store/actions/dilemmaActions";
import Header from "../../components/Header/Header";

const options = [
  { value: "DRUGS", label: "Drugs" },
  { value: "RELATIONSHIP", label: "Relationship" },
  { value: "EDUCATION", label: "Education" },
  { value: "SEX", label: "Sex" }
];

const customStyles = {
  container: (base, state) => ({
    ...base,
    border: state.isFocused ? null : null,
    borderBottom: "1px solid #ccc",
    transition:
      "border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease",
    "&:hover": {
      boxShadow: "0 2px 4px 0 rgba(41, 56, 78, 0.1)"
    }
  }),
  control: (base, state) => ({
    ...base,
    background: "transparent",
    border: "none"
  }),
  valueContainer: (base, state) => ({
    ...base
  })
};

class AddDilemma extends Component {
  errors = {
    tagsError: "",
    requiredError: ""
  };

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
      tags: null,
      files: [],
      followers: [],
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
    this.errors.tagsError = "You can only choose a minimum of 3 tags";        
    this.setState({ tags: event }); 
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.question === "" ||
      this.state.tags === null
    ) {
      this.errors.requiredError = "This is a required field";
    } else if(this.state.tags.length > 3){
      this.errors.tagsError = "You can only choose a minimum of 3 tags";        
    } else {
      this.props.createDilemma(this.state);
      this.props.history.push("/");
    }
  };

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {
    const files = this.state.files.map(file => (
      <div key={file.name}>
        <img
          className="img-thumbnail rounded-circle"
          src={file.preview}
          alt=""
        />
      </div>
    ));
    return (
      <div>
        <Header pageName="Ask a Question" />
        <div className="question-form">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group mb-4">
              <textarea
                className="form-select"
                placeholder="Start your question here!"
                id="question"
                type="text"
                value={this.state.question}
                onChange={this.handleChangeQuestion}
                required
              />
            </div>

            <div className="form-group ml mb-4">
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

            <div className="form-group mb-4">
              <Select
                styles={customStyles}
                value={this.state.tags}
                onChange={this.handleChangeTag}
                options={options}
                placeholder={"Select Category"}
                isMulti
              />
              { this.state.tags != null && this.state.tags.length >= 4 && 
              <small className="error">{this.errors.tagsError}</small> }
              { this.state.tags === null && 
              <small className="error">{this.errors.requiredError}</small>}
            </div>

            <div className="form-group">
              <Dropzone onDrop={this.onDrop} accept="image/*">
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <span className="attachment-icon mr-2">
                        <TiAttachment className="icon-size" />
                      </span>
                      ADD ATTACHMENT
                      <span className="float-right">
                        <IoIosArrowForward />
                      </span>
                      <aside>
                        <ul>{files}</ul>
                      </aside>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>

            <div className="form-group text-center">
              <button className="btn question-btn mt-5" type="submit">
                Post Now
              </button>
            </div>
          </form>
          
        </div>
      </div>
    );
  }
}

AddDilemma.propTypes = {
  createDilemma: PropTypes.func.isRequired
};

export default connect(
  null,
  { createDilemma }
)(AddDilemma);
