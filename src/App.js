import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import RegisterPage from "./pages/register/regsiter.component";
import LoginPage from "./pages/login/login.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
