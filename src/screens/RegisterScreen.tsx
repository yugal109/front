import React, { useState,useEffect } from "react";
import { useHistory } from "react-router";
import "../css/register.css";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../actions/userAction";

interface registerScreenInterface {
  registerState: {
    loading: boolean;
    error?: string;
    registerd: boolean;
  };
}

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  
  const dispatch = useDispatch();
const history=useHistory()

  const { loading, error, registerd }: any =
    useSelector<registerScreenInterface>((state) => state.registerState);

  const handelRegisterSubmit = (e:any) => {
    e.preventDefault()
    dispatch(registerAction(email, username, password, fullname,history));
   
  };
  
  return (
    <div className="login-page">
      <div className="form">
        <div className="login_header">Register</div>

        <form onSubmit={handelRegisterSubmit} className="login-form">
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            placeholder="fullname"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button>{!loading ? "Register" : "Wait..."}</button>
          {error && <div className="error_message">{error} </div>}
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
