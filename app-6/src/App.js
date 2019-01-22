import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
        taskList: [],
        userInput: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleChange(value){
    this.setState({
        userInput: value
    })
  }

  handleAddTask(){
    this.setState({
      taskList: [...this.state.taskList, this.state.userInput], 
      userInput: ''
    })
  }

  render(){
    let taskList = this.state.taskList.map((item, index) => {
      return (
        <Todo key={index} task={item}/>
      )
    })

    return (
        <div className='App'>
          <h1>My to-do list:</h1>
          <div>
            <input 
              value={this.state.userInput}
              onChange={event => this.handleChange(event.target.value)} 
              placeholder='Enter new task'/>
            <button onClick={this.handleAddTask}>Add</button>
          </div>
          <br/>
        {taskList}
        </div>
    )
  }
}

export default App;
