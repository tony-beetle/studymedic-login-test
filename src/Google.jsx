import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase/config";

function Google() {
  //
  const handlegoogle =  (e) => {
        e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    
  };

  // const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setInputValue({ ...inputValue, [name]: value });
  //     console.log(inputValue.email);
  //   };
  return (
    <>
      <h4 className="text-danger p-1">Register Using Google</h4>
      {/* <form style={{height:"150px"}}>
                <div className="mb-2">
                    <label for="exampleInputgoogle" class="form-label">
                        G-Mail 
                    </label>
                    <input
                        name="email"
                        placeholder='eg : xyz@gmail.com'
                        onChange={handleInputChange}
                        value={inputValue.email}
                        type="email"
                        class="form-control"
                        id="exampleInputgoogle"
                        aria-describedby="emailHelp"
                    />
                </div> */}
      <button
        onClick={handlegoogle}
        type="submit"
        class="btn  mt-4 mb-4 btn-primary"
      >
        Sign in with Google
      </button>

      {/* </form> */}
    </>
  );
}

export default Google;
