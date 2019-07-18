import React from "react";
import {connect} from "react-redux"
import { FiEye } from "react-icons/fi";
import { fetchDilemma } from "../../store/actions/dilemmaActions";
import Moment from "react-moment";
import PropTypes from "prop-types";

import CommentCreate from "../../components/CommentCreate/CommentCreate";
import CommentList from "../../components/CommentsList/CommentsList";
import Header from "../../components/Header/Header";
import DilemmaRespondents from "../../components/DilemmaRespondents/DilemmaRespondents";
import Tags from "../../components/Tags/Tags";
import "./DilemmaDetails.scss";

class DilemmaDetails extends React.Component {

  componentDidMount () {
    const { id } = this.props.match.params;
    this.props.fetchDilemma(id);
  }

  render() {
    const { dilemma = {} } = this.props;
    const { tags = [] } = dilemma;
    return (
      <div >
      <Header pageName="Question" />
      <div className="dilemma-details">
      <div onClick={this.handleClose}>
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
          <DilemmaRespondents dilemma={dilemma} />
          <div className="row">
            <div className="col">
              <CommentCreate />
            </div>
            <CommentList />
          </div>
         </div>
       </div>
       </div>
    );
  }
}

DilemmaDetails.propTypes = {
  fetchDilemma: PropTypes.func.isRequired,
  dilemma: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return { dilemma: state.dilemmas.item}
}

export default connect(
  mapStateToProps,
  { fetchDilemma }
  
)(DilemmaDetails) ;
