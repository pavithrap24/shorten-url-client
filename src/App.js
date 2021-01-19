import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RedirectShortUrl from "./components/redirectShortUrl";
import ShortUrl from "./components/shortUrl";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ShortUrl} />
        <Route path="/:id" component={RedirectShortUrl} />
      </Switch>
    </Router>
  );
}

export default App;
