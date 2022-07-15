import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorVisibility, setErrorVisibility] = useState("hidden");

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    const backendUrl = "https://mealplannerserver.herokuapp.com/";
    const route = "";
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        setError("Missing email or password!");
      } else {
        await axios.post(
          `${backendUrl}${route}`,
          JSON.stringify({ email, password }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        dispatch({ type: "SET USER", payload: email });
        navigate("/home");
      }
      setEmail("");
      setPassword("");
    } catch (err) {
      if (!err?.response) {
        setError("No server response!");
      } else if (err.response?.status === 401) {
        setError(
          "Unauthorized! Create an account or check your email and password!"
        );
        setErrorVisibility("visible");
        setTimeout(() => {
          setErrorVisibility("hidden");
        }, "2000");
      } else {
        setError("Login failed!");
        setErrorVisibility("visible");
        setTimeout(() => {
          setErrorVisibility("hidden");
        }, "2000");
      }
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="loginError" style={{ visibility: errorVisibility }}>
        {error && error}
      </div>
      <form aria-label="login" className="registerForm" onSubmit={handleSignIn}>
        <h2 className="LoginHeader">Login</h2>
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
        <button className="signUp">Login</button>
        <button
          className="haveAccount"
          data-testid="button1"
          onClick={() => navigate("/MealPlan")}
        >
          Already have an account?
        </button>
      </form>
    </>
  );
};

export default LoginComponent;
