import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchDilemmas } from "../../store/actions/dilemmaActions";
import Discussion from "../../components/Discussion/Discussion";
import DilemmaBtn from "../../components/DilemmaBtn/DilemmaBtn";
import Header from "../../components/Header/Header";

export class Discussions extends Component {
  
  componentWillMount() {
    this.props.fetchDilemmas();
  }

  render() {
    const { dilemmas } = this.props;

    return (
      <div>
        <Header pageName="Discussion"/>
        <DilemmaBtn />
        <div style={{"paddingTop": "56px"}}>
          {dilemmas.map((dilemma, i) => (
            <Discussion dilemma = { dilemma } key={ i } />
          ))}
        </div>
      </div>
    );
  }
}

Discussions.propTypes = {
  fetchDilemmas: PropTypes.func.isRequired,
  dilemmas: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  dilemmas: state.dilemmas.items
});

export default connect(
  mapStateToProps,
  { fetchDilemmas }
)(Discussions);
