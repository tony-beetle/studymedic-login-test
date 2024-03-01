import React from "react";
import { useState } from "react";
import { auth } from "./firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import "./forgot.css"
import { useNavigate } from "react-router";

function ForgotPass() {
  //
  const navigate =useNavigate()
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, inputValue.email)
      .then((data) => {
        alert("Check your gmail");
        navigate("/login")
       
      })
      .catch((err) => {
        alert(err.code);
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };

  return (
    <>

<div className="div container-fluid h-100 d-flex justify-content-center p-5">
      <div  style={{height:"200px",width:"350px"}} className="card d-flex justify-content-center align-items-center " >
        <div className="card-body w-75">
          <form >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Email Id
              </label>
              <input
              placeholder=""
                name="email"
                onChange={handleInputChange}
                value={inputValue.email || ''}
                type="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
              />
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary w-100 mt-2"
            >
              Send Reset Mail
            </button>
          </form>
        </div>
      </div>
    </div>

    </>
  );
}

export default ForgotPass;
