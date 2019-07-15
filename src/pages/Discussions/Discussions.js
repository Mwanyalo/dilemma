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

  componentWillReceiveProps(nextProps) {
    if (nextProps.addDilemma) {
      this.props.dilemmas.unshift(nextProps.addDilemma);
    }
  }

  render() {
    const { dilemmas } = this.props;
    return (
      <div>
        <Header pageName="Discussion"/>
        <DilemmaBtn />
        {dilemmas.map((dilemma, i) => (
          <Discussion dilemma={ dilemma } key={ i } />
        ))}
      </div>
    );
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

export default connect(
  mapStateToProps,
  { fetchDilemmas }
)(Discussions);
