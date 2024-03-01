import React from "react";
import { useState } from "react";
import { auth } from "./firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Login() { 
  const navigate = useNavigate();

  //  console.log(auth);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
   // const auth = getAuth();
   if(!inputValue.email || !inputValue.password){
    alert("fill the form completely")
   }else{
    signInWithEmailAndPassword(auth, inputValue.email, inputValue.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
  console.log(user );
      alert("login successfull");
      navigate("/dashboard");
      // ...
    })
    .catch((error) => {

      alert("Invalid Credentials")
      console.log(error.code );
    });
   }
    
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };
  return (
    <>
      <div className="App d-flex justify-content-center pt-5 mt-5  ">
        <div style={{ width: "400px"}} class="card">
          <div class="card-body">
            <h3 className="text-primary p-3 mb-4 text-start  ">Login Form</h3>
            <form className="text-primary p-3 text-start  ">
              <div className="mb-2">
                <label for="exampleInputEmail" class="form-label">
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
                class="btn  mt-4 btn-primary"
              >
                Submit
              </button>
              <div style={{fontSize:"14px"}} className="div d-flex justify-content-between">
              <p className="py-2">New User? <Link style={{textDecoration:"none",paddingTop:"10px"}} to={"/register"}>Click to Register!</Link> </p>
           <Link style={{textDecoration:"none",paddingTop:"7px"}}  to={"/forgotpass"}><p>Forgot Password?</p></Link>
            
              </div>
             </form>
            <div class="line-with-text  fw-bold">Or</div>
           <div className="div pt-2 pb-4">
           <Link to={"/phone"}>
              {" "}
              <button className="btn rounded-pill  btn-primary rounded">
            
                <i class="fa-solid mx-2 fa-phone"></i>  Login via Phone
              </button>
            </Link>{" "}
            </div>   
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
