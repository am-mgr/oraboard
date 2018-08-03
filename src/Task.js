import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class Task extends Component {
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <TextField
          placeholder="When"
          type="text"
          name="when"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <TextField
          placeholder="What"
          type="text"
          name="what"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <TextField
          placeholder="TL;DR"
          type="text"
          name="tldr"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Task;
