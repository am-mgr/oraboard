import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <h1>OraBoard</h1>
          <Button variant="contained" color="secondary">
            Ready to todo!
          </Button>
        </Grid>
      </div>
    );
  }
}

export default App;
