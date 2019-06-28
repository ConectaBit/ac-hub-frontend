import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Feed from "./pages/feed";
import Article from "./pages/article";
import { isAuth } from "./utils";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/feed" component={Feed} />
        <Route path="/article" component={Article} />
        <Route
          path="/"
          render={() => (isAuth() ? <Redirect to="feed" /> : <Home />)}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
