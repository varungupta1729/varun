import React, { useState } from "react";
import { Link } from "react-router-dom";

const FloatingButton = () => {

    return (

<div className="floating-container">
  <div className="floating-button">+</div>
  <div className="element-container">
    <a href="google.com">
      {" "}
      <span className="float-element tooltip-left">
        <i className="material-icons">phone</i>
      </span>
    </a>
    <span className="float-element">
      <i className="material-icons">email</i>
    </span>
    <span className="float-element">
      <i className="material-icons">chat</i>
    </span>
  </div>
</div>




    );



}

export default FloatingButton;