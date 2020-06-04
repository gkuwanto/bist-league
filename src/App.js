import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import RegisterPage from "./pages/register/register.component";
import LoginPage from "./pages/login/login.component";

const placeholder = () => (
  <div>
    <Link to="/register"> Register </Link> <hr />
    <Link to="/login"> Login </Link>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" component={placeholder} />
      </Switch>
    </div>
  );
}

export default App;
