import React, { Component } from 'react';
import './App.css';
import Image from './Component/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={'http://en.bcdn.biz/Images/2018/6/12/133c8505-d85f-488e-84b3-a0aeb574940d.jpg'}/>
      </div>
    );
  }
}

export default App;
