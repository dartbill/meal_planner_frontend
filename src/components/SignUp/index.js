import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [errorVisibility, setErrorVisibility] = useState("hidden");

  const backendUrl = "https://mealplannerserver.herokuapp.com/";
  const route = "";

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        setError("Missing name, password or confirm password field!");
      } else if (password.length < 4) {
        setError("Your password should be at least 5 characters long!");
      } else if (password !== confirmPassword) {
        setError("Make sure password and confirm password match!");
      } else {
        await axios.post(
          `${backendUrl}${route}`,
          JSON.stringify({ name, email, password }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        dispatch({ type: "SET USER", payload: name });
        navigate("/MealPlanner");
      }
      setname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      if (!err?.response) {
        setError("No server response!");
      } else if (err.response?.status === 500) {
        setError(
          "Request to create a user was not successful! Make sure your passwords match!"
        );
        setErrorVisibility("visible");
        setTimeout(() => {
          setErrorVisibility("hidden");
        }, "2000");
      } else {
        setErrorVisibility("visible");
        setTimeout(() => {
          setErrorVisibility("hidden");
        }, "2000");
      }
    }
  };

  const onnameChange = (e) => {
    setname(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <>
      <div className="loginError" style={{ visibility: errorVisibility }}>
        {error && error}
      </div>
      <form aria-label="login" className="registerForm" onSubmit={handleSignUp}>
        <h2 className="registerHeader">Create Account</h2>
        <label htmlFor="email" className="signEmailLabel">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          autoFocus
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
          data-testid="emailInput"
          className="signEmail"
        />
        <label htmlFor="name" className="signnameLabel">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoFocus
          placeholder="name"
          value={name}
          onChange={onnameChange}
          data-testid="nameInput"
          className="signname"
        />
        <label htmlFor="password" className="signPasswordLabel">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoFocus
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
          data-testid="passwordInput"
          className="signPassword"
        />
        <label htmlFor="confirmPassword" className="confirmPasswordLabel">
          Confirm password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          autoFocus
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          data-testid="confirmPasswordInput"
          className="confirmPasswordInput"
        />
        <button className="signUp">Sign up</button>
        <button
          className="haveAccount"
          data-testid="button1"
          onClick={() => navigate("/Login")}
        >
          Already have an account?
        </button>
      </form>
    </>
  );
};

export default SignUp;
