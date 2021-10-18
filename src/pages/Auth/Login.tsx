import React, { useContext, useState } from "react";
import { RouteComponentProps, useNavigate } from "@reach/router";

import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import { User } from "../../types/Auth";

const Login: React.FC<RouteComponentProps> = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  console.log("email", email);
  const onSubmit = async (e: React.FormEvent) => {
    login({ email: email } as User);
    navigate("/playlists");
  };

  return (
    <div id="login-container">
      <div id="header">
        <div id="logo"></div>
      </div>
      <div id="main">
        <form onSubmit={(e) => onSubmit(e)} id="form">
          <input
            name="input"
            placeholder="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input name="input" placeholder="Password" type="password" />
          <input name="login" type="submit" value="Log in" />
        </form>
      </div>
    </div>
    // <div className="login-container">
    //   <form onSubmit={(e) => onSubmit(e)} className="login">
    //     <label>
    //       Email:
    //       <input
    //         placeholder="Your email"
    //         name="email"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </label>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
};

export default Login;
