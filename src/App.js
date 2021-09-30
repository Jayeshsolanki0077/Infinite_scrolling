import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./component/login-page/login-page.component";
import HomePage from './component/home-page/home-page.component';
import './App.css'
import "./shared-ui.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
