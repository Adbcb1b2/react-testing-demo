import React from 'react';
import './App.css';
import Greeter from './GreeterComponent';

export default class App extends React.Component<{}, {userName: string }>{
  constructor(props: any) {
    super(props);
    this.state = {
      userName: '',
    }
  }

  updateUserName = (event: any) => {
    this.setState({
      userName: event.target.value
    })
  }

  clearName = (event: any) => {
    this.setState({
      userName: ''
    })
  }

  render() {
    return(
      <div id='app'>
        <h3>Input:</h3>
        <p>
          <label htmlFor='userName'>User Name</label>
          <input type='text' id='userName' value={this.state.userName}
          onChange={this.updateUserName}/></p>
          <button onClick={this.clearName}>Clear Name</button>
        <h3>Message:</h3>
        <Greeter userName={this.state.userName}/>
      </div>

    )
  }

}
