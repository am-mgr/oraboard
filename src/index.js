import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Router, Link } from "@reach/router";

const Home = () => {
  return <App />;
};

const About = () => {
  return <p>About us</p>;
};

const Foo = ({ msg, name }) => {
  return (
    <p>
      Message: {msg} {name}
    </p>
  );
};

const AppWithRoute = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </div>
      <div>
        <Link to="foo/hello/to/world">Foo</Link>
      </div>
      <Router>
        <Home path="/" />
        <About path="about" />
        <Foo path="foo/:msg/to/:name" />
      </Router>
    </div>
  );
};

ReactDOM.render(<AppWithRoute />, document.getElementById("root"));
registerServiceWorker();
