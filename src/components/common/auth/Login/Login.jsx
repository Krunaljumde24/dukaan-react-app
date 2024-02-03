import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./login.css";
import loginImg from "../../../../assets/Fingerprint-pana.png";
import AuthContext from "../../../../context/AuthContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const { setLoggedInUser, loggedInUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let handleLogin = (data) => {
    axios
      .post("http://localhost:8080/login", {
        username: data.username,
        password: data.password,
      })
      .then((resp) => {
        if (
          resp.status == "200" &&
          resp.data == "User Succuessfully logged in."
        ) {
          toast.success("Welcome " + data.username + " to Dukaan");
          setLoggedInUser(data.username);
        } else if (resp.code == "ERR_BAD_REQUEST") {
          toast.error("Failed to login.");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(err.response.data)
          console.log(err);
        }
      });
  };

  return (
    <div className="login-container">
      {loggedInUser && <Navigate to="/shop" replace={true} />}

      <div className="login-form">
        <div className="login-left">
          <img src={loginImg} className="login-left-img" alt="login_image" />
        </div>
        <div className="login-right">
          <form
            onSubmit={handleSubmit((data) => {
              handleLogin(data);
            })}
          >
            <h3>Login</h3>
            <label htmlFor="uName">Username</label>
            <br />
            <input
              id="uName"
              type="text"
              name="username"
              {...register("username", { required: true })}
            />
            <br />
            <label htmlFor="uPass">Password</label>
            <br />
            <input
              id="uPass"
              type="password"
              name="password"
              {...register("password", { required: true })}
            />
            <br />
            <br />
            <button className="btn btn-sm btn-primary">Login</button>
            <p>
              {" "}
              New to app? <Link to="/signup">Sign Up</Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
