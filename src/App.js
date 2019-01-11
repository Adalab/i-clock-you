import React, { Component } from 'react';
import Clock from './components/Clock';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      time: this.getTime()
    }

    this.updateMyClock = this.updateMyClock.bind(this);
    setInterval(this.updateMyClock,1000);
  }

  getTime() {
    const h = new Date().getHours();
    const m = new Date().getMinutes();
    const s = new Date().getSeconds();
    return `${h}:${m}:${s}`;
  }

  updateMyClock() {
    const newTime = this.getTime();
    this.setState({
      time: newTime
    });
  }

  render() {
    return (
      <div className="App">
        <Clock laHora={this.state.time} />
      </div>
    );
  }
}

export default App;
