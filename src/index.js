import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import reducer from './reducers/reducer';
import store from "./store";
// const store = createStore(reducer)

const apiKey = "4a85ed324bd749eba71cf53e82e1c84d";

export default apiKey;


const root = ReactDOM.createRoot(
  document.getElementById("root") || document.createElement("div")
);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
