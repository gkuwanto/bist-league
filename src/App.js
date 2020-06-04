import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import RegisterPage from "./pages/register/regsiter.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
