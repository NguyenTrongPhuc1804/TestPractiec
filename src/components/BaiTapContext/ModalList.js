import React, { Component } from "react";
import ModalItem from "./ModalItem";
import DataModal from "./dataProfile.json";
import ModalContextProvider from "./Provider/ModalContextProvider";
import { ModalContext } from "./Context/ModalContext";
class ModalList extends Component {
  render() {
    return (
      <ModalContext.Consumer>
        {(value) => {
          return (
            <div className="">
              <h1>List profile</h1>
              <div className="row">
                {value.dataList.map((modal, index) => (
                  <div
                    onClick={() => {
                      value.setModal(modal.id);
                    }}
                    className="col-3"
                    key={modal.id}
                  >
                    <ModalItem data={modal}></ModalItem>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </ModalContext.Consumer>
    );
  }
}

export default ModalList;
