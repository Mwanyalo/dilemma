import React, { Component } from "react";
import { FiEye, FiRss, FiMessageCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "./Discussions.scss";
import { fetchDilemmas } from '../_store/actions/dilemmaActions';

export class Discussions extends Component {

  componentWillMount() {
    this.props.fetchDilemmas();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.addDilemma) {
      this.props.dilemmas.unshift(nextProps.addDilemma);
    }
  }

  render() {
    const { dilemmas } = this.props;
    return (
      dilemmas.map((dilemma, i) => (
        <Link key={i} className="link-to" to={{
          pathname: `/question/${ dilemma.id }`}}>
        <div  className="card m-2">
          { dilemma.attachment && (
            <div className="card-img">
              <img src={ dilemma.attachment } alt="" />
            </div>
          )}
          <div className="card-body">
            <p> { dilemma.question } </p>
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
                  { dilemma.views } Views
                </small>
              </span>
              <span className="ml-3 text-muted">
                <small>{ dilemma.createdDate }</small>
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
      ))
    )
  }
}

Discussions.propTypes = {
  fetchDilemmas: PropTypes.func.isRequired,
  dilemmas: PropTypes.array.isRequired,
  addDilemma: PropTypes.object
};

const mapStateToProps = state => ({
  dilemmas: state.dilemmas.items,
  addDilemma: state.dilemmas.item
});

export default connect(mapStateToProps, { fetchDilemmas })(Discussions);
