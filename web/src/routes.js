import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Feed from "./pages/feed";
import Article from "./pages/article";
import Logout from "./pages/logout";
import { isAuth } from "./utils";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/feed" render={() => (isAuth() ? <Feed /> : <Home />)} />
        <Route path="/article/:id" render={(props) => isAuth() ? <Article articleID={props.match.params.id} /> : <Home />} />
        <Route path="/logout" component={Logout} />
        <Route path="/" render={() => (isAuth() ? <Feed /> : <Home />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
