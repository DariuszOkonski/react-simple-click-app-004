import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Buttons from './Buttons';
import Results from './Results';

class App extends Component {
  state = {
    clicks: 0,
    result: 0,
  }

  handleClick = (type, number) => {
    if (type === 'subtract') {
      this.setState((prevState) => ({
        clicks: prevState.clicks + 1,
        result: prevState.result + number
      }));
    } else if (type === 'reset') {
      this.setState((prevState) => ({
        clicks: prevState.clicks + 1,
        result: 0,
      }));
    } else if (type === 'resetAll') {
      this.setState(() => ({
        clicks: 0,
        result: 0,
      }))
    } else if (type === 'add') {
      this.setState((prevState) => ({
        clicks: prevState.clicks + 1,
        result: prevState.result + number,
      }))
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Buttons click={this.handleClick} />
        <Results state={this.state} />
      </div>
    );
  }
}

export default App;
