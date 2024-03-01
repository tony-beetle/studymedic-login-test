import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "./firebase/config";
function Phone() {
  //
  console.log(auth.currentUser);
  //  const navigate = useNavigate();
  //   const [,setOtp]= useState("")
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    number: " ",
    otp: "",
  });

  const sendOtp = async (e) => {
    e.preventDefault();
    //const auth = getAuth()
    try {
      const recapchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(
        auth,
        inputValue.number,
        recapchaVerifier
      );
      console.log(confirmation);
      setUser(confirmation);
      console.log(inputValue.number);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    await user
      .confirm(inputValue.otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        alert("user reg sucessfull");
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert("error !" + error);
        // ...
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue.number);
  };

  return (
    <>
      <div className="App d-flex justify-content-center pt-5 mt-5  ">
        <div style={{ width: "500px" }} class="card">
          <div class="card-body ">
            <h4 className="text-primary py-4"> Login using Phone Number </h4>

            <form
              className="text-start text-primary"
              style={{ height: "200px" }}
            >
              <div className="mb-2">
                <label for="exampleInputph" class="form-label">
                  Phone Number
                </label>
                <input
                  name="number"
                  onChange={handleInputChange}
                  value={inputValue.number}
                  type="text"
                  class="form-control"
                  id="exampleInputph"
                  aria-describedby="emailHelp"
                />
              </div>
              <button
                onClick={sendOtp}
                type="submit"
                class="btn  mt-4 mb-4 btn-primary"
              >
                Get OTP
              </button>
              <div id="recaptcha"></div>
            </form>

            <form className="text-primary text-start">
              <div className="mb-2">
                <label for="exampleInputotp" class="form-label mx-3">
                  Enter OTP
                </label>
                <input
                  name="otp"
                  onChange={handleInputChange}
                  value={inputValue.otp}
                  type="text"
                  class="form-control w-50"
                  id="exampleInputotp"
                  aria-describedby="emailHelp"
                />
              </div>
              <button
                onClick={verifyOtp}
                type="submit"
                class="btn  mt-4 mb-4 btn-success"
              >
                verify OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Phone;
