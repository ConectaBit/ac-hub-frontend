import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Feed from "./pages/feed";
import Article from "./pages/article";
import Logout from './pages/logout'
import { isAuth } from "./utils";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/feed"
         render={() => (isAuth() ? <Redirect to='feed' /> : <Home />)} />
        <Route path="/article" component={Article} />
        <Route path="/logout" component={Logout} />
        <Route
          path="/"
          render={() => (isAuth() ? <Redirect to="feed" /> : <Home />)}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
