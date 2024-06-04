import React, { Fragment, useState } from "react";
import "./Formstyles.css";
import Modal from "./Modal";

const LoginForm = () => {
  const [errorMessage, seterrorMessage] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [LoginInputs, setLoginInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    const { age, phoneNumber } = LoginInputs;

    seterrorMessage(null);
    if (age < 18 || age > 100) {
      seterrorMessage("The Age Is Not Allowed");
    } else if (phoneNumber.length > 11 || phoneNumber.length < 10) {
      seterrorMessage("The Phone Number Is Not Allowed");
    }

    setshowModal(true);
  }

  function handleDivClick() {
    if (showModal) {
      setshowModal(false);
    }
  }

  const disabled =
    LoginInputs.name === "" ||
    LoginInputs.age === "" ||
    LoginInputs.phoneNumber === "";
  return (
    <Fragment>
      <div
        onClick={handleDivClick}
        style={{ flexDirection: "column" }}
        className="flex"
      >
        <form
          id="LoginForm"
          className="flex"
          style={{ flexDirection: "column" }}
        >
          <h1>Login</h1>
          <hr></hr>
          <label>Name:</label>
          <input
            value={LoginInputs.name}
            onChange={(event) => {
              setLoginInputs({ ...LoginInputs, name: event.target.value });
            }}
            type="text"
            className="form-control"
          ></input>

          <label>Phone Number:</label>
          <input
            value={LoginInputs.phoneNumber}
            onChange={(event) => {
              setLoginInputs({
                ...LoginInputs,
                phoneNumber: event.target.value,
              });
            }}
            type="tel"
            className="form-control"
          ></input>

          <label>Age:</label>
          <input
            value={LoginInputs.age}
            onChange={(event) => {
              setLoginInputs({
                ...LoginInputs,
                age: event.target.value,
              });
            }}
            type="number"
            className="form-control"
          ></input>

          <label style={{ marginTop: "20px" }}>Are You An Employee?</label>
          <input
            checked={LoginInputs.isEmployee}
            onChange={(event) => {
              setLoginInputs({
                ...LoginInputs,
                isEmployee: event.target.checked,
              });
            }}
            type="checkbox"
          ></input>

          <label>Salary:</label>
          <select
            value={LoginInputs.salaryRange}
            onChange={(event) => {
              setLoginInputs({
                ...LoginInputs,
                salaryRange: event.target.value,
              });
            }}
            className="form-control"
          >
            <option>Less Than 500$</option>
            <option>Between 500$ and 2000$</option>
            <option>Above 2000$</option>
          </select>
          <button
            disabled={disabled}
            onClick={handleFormSubmit}
            id="submitFormBtn"
            className="btn btn-danger mt-3"
          >
            Submit
          </button>
        </form>
        <Modal errorMessage={errorMessage} isVisible={showModal}></Modal>
      </div>
    </Fragment>
  );
};

export default LoginForm;
