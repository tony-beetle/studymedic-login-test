import React from "react";
import { useState } from "react";
import { auth } from "./firebase/config";
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { useNavigate } from "react-router";
import Phone from "./Phone";
import Google from "./Google";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
  //
  const navigate = useNavigate();
  //
  // console.log(auth);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("button clicked")
    createUserWithEmailAndPassword(auth, inputValue.email, inputValue.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("user registerd successsfully! login now");
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };
  return (
    <>
      <div className="App d-flex justify-content-center pt-5 mt-5  ">
        <div style={{ width: "500px" }} class="card ">
          <div class="card-body">
            <form className="text-start text-primary">
              <h4 className="text-primary py-4">
                {" "}
                Register With Email & Password{" "}
              </h4>

              <div className="mb-2">
                <label for="exampleInputEmail" class="form-label ">
                  Email Id
                </label>
                <input
                  name="email"
                  onChange={handleInputChange}
                  value={inputValue.email}
                  type="email"
                  class="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-2">
                <label for="exampleInputEmail1123" class="form-label">
                  password
                </label>
                <input
                  name="password"
                  placeholder="*******"
                  onChange={handleInputChange}
                  value={inputValue.password}
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1123"
                  aria-describedby="emailHelp"
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                class="btn  mt-4  btn-primary"
              >
               <div className="span "> Submit</div>
              </button>
              <p className="p-2">Already have an account <Link to={"/login"}>Login now</Link> </p>
            </form>
                   
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
