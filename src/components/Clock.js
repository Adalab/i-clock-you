import React, {Component} from "react";

class Clock extends Component {
  render() {
    return (
      <div className="App__clock">La hora es: {this.props.laHora}</div>
    );
  }
}

export default Clock;