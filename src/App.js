import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import WhyUs from "./pages/WhyUs";
import Landing from "./pages/Landing";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const main = {
  primary: "#FD4714",
  secondary: "#0EA9D9",
  body: "#232323",
  greyLt: "#EDEDED",
  greyMd: "#C3C3C3",
  greyDk: "#808080",
  radius: "4px",
  gradient1:
    "linear-gradient(0deg,rgba(45, 0, 104, 1) 0%,rgba(1, 0, 19, 1) 100%);",
  gradient2:
    "linear-gradient(180deg, rgba(0,8,11,1) 0%, rgba(7,85,109,1) 100%)",
  gradient3: "linear-gradient(180deg,#03A9F4 0%,#ffffff 100%);",
  gradient4: "linear-gradient(180deg,rgba(0,8,11,1) 0%,rgb(100 100 100) 100%);",
  gradient5: "linear-gradient(180deg,#03A9F4 0%,#4dc8ff 100%);",
  gradient6: "linear-gradient(0deg,rgb(40 0 95) 0%,rgb(53 3 119) 100%);",
  gradient7:
    "linear-gradient(90deg, rgba(237,237,237,1) 0%, rgba(209,209,209,1) 100%);",
};

function App() {
  return (
    <ThemeProvider theme={main}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/whyus" component={WhyUs}></Route>
          <Route exact path="/landing" component={Landing}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
