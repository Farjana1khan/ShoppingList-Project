import React, { useState } from "react";
import "./signup.css";

import { useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [mobileErr, setMobileErr] = useState({});

  const submitregistrationForm = (e) => {
    e.preventDefault();
    const isValid = formValidation();

    if (isValid) {
      setName(" ");
      setEmail(" ");
      setMobile(" ");
      alert("Form submitted");
      history.push("/productlist");
    }
  };

  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  var namepattern = new RegExp((/^[a-zA-Z]+$/))

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const mobileErr = {};
    let isValid = true;

    if (name.trim().length < 5) {
      nameErr.nameShort = "*please enter valid name!";
      isValid = false;
    }
    if (!name.match(namepattern)) {
      nameErr.nameShort = "*please enter valid name!";
      isValid = false;
    }

    if (!email.match(pattern)) {
      emailErr.emailShort = "*please enter valid email id!";
      isValid = false;
    }

    if (!mobile.match(/^[0-9]{10}$/)) {
      mobileErr.mobileShort = "*please enter valid 10 digits phone nubmer!";
      isValid = false;
    }

    setNameErr(nameErr);
    setEmailErr(emailErr);
    setMobileErr(mobileErr);
    return isValid;
  };

  return (
    <div id="main-registration-container">
      <div id="register">
        <h5>
          Get in Touch to<span className="span1"> know more</span>
        </h5>

        <form
          method="post"
          onSubmit={submitregistrationForm}
          name="userRegistrationForm"
        >
          <label>Company Name*</label>
          <input
            type="text"
            className="no-outline"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="username"
          />
          {Object.keys(nameErr).map((key) => {
            return <div className="errorMsg">{nameErr[key]}</div>;
          })}

          <label>Email*</label>
          <input
            type="text"
            className="no-outline"
            name="emailid"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {Object.keys(emailErr).map((key) => {
            return <div className="errorMsg">{emailErr[key]}</div>;
          })}

          <label>Phone*</label>
          <input
            type="text"
            className="no-outline"
            name="mobileno"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          {Object.keys(mobileErr).map((key) => {
            return <div className="errorMsg">{mobileErr[key]}</div>;
          })}

          <button
            type="submit"
            className="button no-outline"
            value="Submit Now"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
