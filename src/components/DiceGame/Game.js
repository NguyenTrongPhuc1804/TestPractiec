import React, { Component } from "react";
import Dice from "./Dice";
import PlayGame from "./PlayGame";
// import "./dice.css";
import { connect } from "react-redux";
class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="container">
          <h1 className="text-center">Dice Game</h1>
          <div className="row">
            <div className="col-3">
              <button
                onClick={() => {
                  this.props.datCuoc(true);
                }}
                className="btn"
              >
                Tài
              </button>
            </div>
            <div className="col-6 ">
              <Dice></Dice>
              <div className="thong-tin-game d-flex flex-column justify-content-center">
                <PlayGame></PlayGame>
                <button
                  onClick={() => {
                    this.props.playGame();
                  }}
                  className="play"
                >
                  Chơi Game
                </button>
              </div>
            </div>
            <div className="col-3">
              <button
                onClick={() => {
                  this.props.datCuoc(false);
                }}
                className="btn"
              >
                Xỉu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Game);
