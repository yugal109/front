import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { loginAction,googleLoginAction} from "../actions/userAction";
import GoogleLogin from "react-google-login";
// import loginDispatch from "../actions/loginDispatch";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import "../css/Login.css";

interface loginScreenInterface {
  loginState: {
    loading: boolean;
    error?: string;
  };
}

const LoginScreen: React.FC = () => {
  const { loading, error }: any = useSelector<loginScreenInterface>(
    (state) => state.loginState
  );
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handelLoginFormSubmit = (e: any): void => {
    e.preventDefault();
    dispatch(loginAction(email, password, history));
  };
  const responseGoogle = (response: any) => {
    dispatch(googleLoginAction(response.tokenId,history))
  };
  return (
    <>
      <div className="login-page">
        <div className="form">
          <div className="login_header">Login</div>

          <form onSubmit={handelLoginFormSubmit} className="login-form">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button>{loading ? "Logging..." : "Login"}</button>
            <div style={{margin:10}}>
              </div>
            <GoogleLogin
              clientId="820102087536-rqic20dfm37vp6ugg05isbh4h4g6ffg6.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            {error && <div className="error_message">{error} </div>}
            <p className="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
