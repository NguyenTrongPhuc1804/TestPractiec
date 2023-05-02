import React, { Component } from "react";
import { connect } from "react-redux";
class Dice extends Component {
  renderDice = () => {
    return this.props.stateDice.map((item, index) => {
      return <img key={index} className="col-4" src={item.img} alt="" />;
    });
  };
  render() {
    return <div className="row">{this.renderDice()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { stateDice: state.DiceGameReducer.diceArray };
};

export default connect(mapStateToProps)(Dice);
