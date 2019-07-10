import React, { Component } from "react";
import { FiEye, FiRss, FiMessageCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import "./Discussions.scss";
import { fetchDilemmas } from '../_store/actions/dilemmaActions';

const Dilemma = ({dilemma}) => {
  const {tags = [] } = dilemma
  return (
    <Link className="link-to" to={{
      pathname: `/discussion/${ dilemma.id }`}}>
    <div  className="card m-2">
      { dilemma.attachment && (
        <div className="card-img">
          <img src={ dilemma.attachment } alt="" />
        </div>
      )}
      <div className="card-body">
        <p> { dilemma.question } </p>
        
        <Tags tags={tags} />

        <div className="float-right">
          <span className="text-muted">
            <small>
              <FiEye />
              { dilemma.views } Views
            </small>
          </span>
          <span className="ml-3 text-muted">
            <small>
              <Moment fromNow ago>{ dilemma.createdDate }</Moment>
            </small>
          </span>
        </div>
      </div>
      <div className="ml-4 mb-2">
        <small className="card-reply">
          <span className="reply-icon"><FiMessageCircle /> Replies</span> 
          <span className="reply-counter">12</span>
        </small>
        <small className="card-follow">
          <span className="follow-icon"><FiRss /> Follow</span>
          <span className="follow-counter">2300</span>
        </small>
      </div>
    </div>
    </Link>
  )
}

const Tags = ({tags}) => {
  return (
    <div className="float-left">
      <div>
      { tags.map((tag, i) => (
        <small key={i} className="tag-pill">{ tag.label }</small>
      ))}
      </div>
    </div>
)
}

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
      <div>
      <div className="header">
        <h4>Discussions</h4>
      </div>
      <div id="mybutton">
        <Link className="btn float-button rounded-circle" to="/add-question"><FiMessageCircle /></Link> 
      </div>
      {dilemmas.map((dilemma, i) => <Dilemma dilemma={dilemma} key={i} />)}
      </div>
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
