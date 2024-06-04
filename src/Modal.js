import React, { Fragment } from "react";
import "./Formstyles.css";

const Modal = ({ isVisible, errorMessage = null }) => {
  if (isVisible) {
    return (
      <Fragment>
        <div id="modal">
          <div id="modal-content">
            <h1 style={{ color: errorMessage ? "red" : "green" }}>
              {errorMessage != null
                ? errorMessage
                : "The Form Has Been Submitted Successfully"}
            </h1>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Modal;
