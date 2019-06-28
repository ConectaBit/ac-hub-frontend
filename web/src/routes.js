import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Feed from "./pages/feed";
import Article from "./pages/article";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/feed" component={Feed} />
        <Route path="/article" component={Article} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
