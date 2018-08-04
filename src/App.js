import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import Task from "./Task";
import "./App.css";

class App extends Component {
  componentDidMount() {
    const io = require("socket.io-client")("http://localhost:8088");
    io.on("connection", socket => {
      console.log("client connected");
    });
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <h1>OraBoard</h1>
          <Button variant="contained" color="secondary">
            Ready to todo!
          </Button>
          <br />
          <br />
          <Task />
        </Grid>
      </div>
    );
  }
}

export default App;
