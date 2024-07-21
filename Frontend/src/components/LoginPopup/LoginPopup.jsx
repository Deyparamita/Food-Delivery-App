// import React, { useContext, useEffect, useState } from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";

// const LoginPopup = ({ setShowLogin }) => {
//   const { url, setToken } = useContext(StoreContext);

//   const [currState, setCurrState] = useState("Login");

//   // save user name and password
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // take data from input field and save it in the state variable
//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData({ ...data, [name]: value });
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     let newUrl = url;
//     if (currState === "Login") {
//       newUrl += "/api/user/login";
//     } else {
//       newUrl += "/api/user/register";
//     }

//     const response = await axios.post(newUrl, data);
//     if (response.data.success) {
//       setToken(response.data.token);
//       localStorage.setItem("token", response.data.token);
//       setShowLogin("false");
//     } else {
//       alert(response.data.message);
//     }
//   };

//   // useEffect(()=>{
//   //   console.log(data);
//   // }, [data])

//   return (
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt="cross-icon"
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currState === "Login" ? (
//             <></>
//           ) : (
//             <input
//               type="text"
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               placeholder="Write your name"
//               required
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             placeholder="Write your email"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             placeholder="Write your password"
//             required
//           />
//         </div>
//         <button type="submit">
//           {currState === "Login" ? "Login" : "Create an account"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required />
//           <p>By continuing, I agree to the terms of use and privacy policy.</p>
//         </div>
//         {currState === "Login" ? (
//           <p>
//             Create an account?{" "}
//             <span onClick={() => setCurrState("Sign Up")}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => setCurrState("Login")}>Login here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;

import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      console.log("Response:", response.data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin("false");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during axios request:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="cross-icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Write your name"
              required
            />
          )}
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
              value={data.email}
              placeholder="Write your email"
              required
            />
            <input
              type="password"
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              placeholder="Write your password"
              required
            />
          </div>
          <button type="submit">
            {currState === "Login" ? "Login" : "Create an account"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use and privacy policy.</p>
          </div>
          {currState === "Login" ? (
            <p>
              Create an account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          )}
        </form>
      </div>
    );
  };

  export default LoginPopup;
