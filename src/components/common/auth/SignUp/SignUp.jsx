import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./signup.css";

import signSideImg from "../../../../assets/Fingerprint-cuate.png";
import axios from "axios";

function SignUp() {
  const [signUp, setSignUp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let signupBtnClick = (data) => {
    axios
      .post("http://localhost:8080/signup", {
        username: data.username,
        password: data.password,
        email: data.email,
        name: data.name,
      })
      .then((resp) => {
        if (resp.status == "200") {
          toast.success("Sign Up Successfull, please login.");
          setSignUp(true);
        }
        console.log(resp);
      })
      .catch((err) => {
        if (err) console.log(err);
      });
  };

  return (
    <div className="signup-container">
      {signUp && <Navigate to="/login" replace={true} />}
      <div className="signup-form">
        <div className="signup-left">
          <span></span>
          <img
            src={signSideImg}
            className="signup-left-img"
            alt="sign_up_image"
          />
        </div>
        <div className="signup-right">
          <h3>Sign Up</h3>

          <form
            onSubmit={handleSubmit((data) => {
              signupBtnClick(data);
            })}
          >
            <label htmlFor="name">Full Name</label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              {...register("name", { required: true })}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              id="email"
              type="email"
              name="email"
              {...register("email", { required: true })}
            />
            <br />
            <label htmlFor="username">Set Username</label>
            <input
              id="username"
              type="text"
              name="username"
              {...register("username", { required: true })}
            />
            <label htmlFor="password">Set Password</label>
            <input
              id="password"
              type="password"
              name="password"
              {...register("password", { required: true })}
            />
            <br />
            <br />

            <button className="btn btn-sm btn-primary">Sign Up</button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
