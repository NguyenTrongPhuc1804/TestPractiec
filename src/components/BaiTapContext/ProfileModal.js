import React, { Component } from "react";
import { ModalContext } from "./Context/ModalContext";
import ModalContextProvider from "./Provider/ModalContextProvider";

class ProfileModal extends Component {
  render() {
    return (
      <ModalContext.Consumer>
        {(value) => {
          let activeModal = value.dataList.find(
            (modal) => modal.active === true
          );
          return (
            <div>
              <h1>Profile</h1>
              <div
                style={{ width: 300, maginTop: 30, marginBottom: 30 }}
                className="card text-left"
              >
                <img className="card-img-top" src={activeModal.img} />
                <div className="card-body">
                  <h4 className="card-title">Ho ten: {activeModal.name}</h4>
                  <p className="card-text">Tuoi: {activeModal.age}</p>
                  <p className="card-text">Luot thich: {activeModal.like}</p>
                </div>
              </div>
            </div>
          );
        }}
      </ModalContext.Consumer>
    );
  }
}

export default ProfileModal;
