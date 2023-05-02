import React, { Component } from "react";
import { ModalContext } from "./Context/ModalContext";

class ModalItem extends Component {
  render() {
    let { data } = this.props;
    console.log(data);
    return (
      <div>
        <div style={{ width: "100%" }} className="card text-left">
          <img className="card-img-top" src={data.img} />
          <div className="card-body">
            <h5 className="card-title">Ho ten: {data.name}</h5>
            <p className="card-text">Tuoi: {data.age}</p>
            <button
              style={{ background: "none", border: "1px solid red" }}
              className="btn text-danger "
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalItem;
