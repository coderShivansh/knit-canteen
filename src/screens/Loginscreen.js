import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginstate = useSelector((state) => state.loginUserReducer);

  const { loading, error } = loginstate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5">
        <div
          className="shadow-lg p-3 mb-5 bg-white rounded"
          style={{ textAlign: "left" }}
        >
          <h2 style={{ fontSize: "35px", textAlign: "center" }} className="m-2">
            LOGIN
          </h2>

          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}

          <div className="mt-5">
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button className="btn mt-4 mb-3" onClick={login}>
              LOGIN
            </button>
            {/* <br />
                <a style={{ color: 'black' }} href='/register' className='mt-2'>Click Here To Register..!!</a>
              
                <a style={{ color: 'black' }} href='/forgot-password' className='text-right mt-2'>Forgot Password?</a> */}
            <div className="row justify-content-between">
              {" "}
              {/* Align content to the right */}
              <div className="col text-left">
                <a style={{ color: "black" }} href="/register" className="mt-2">
                  Click Here To Register..!!
                </a>
              </div>
              <div className="col text-right">
                <a
                  style={{ color: "black" }}
                  href="/forgot-password"
                  className="mt-2"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
