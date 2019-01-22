import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo'
import List from './Components/List'
import NewTask from './Components/NewTask'

class App extends Component {
  constructor(){
    super()
    this.state = {
        list: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(task){
    this.setState({
        list: [...this.state.list, task]
    })
  }

  render(){
    return (
        <div className='App'>
          <h1>My to-do list:</h1>
          <NewTask add={this.handleAddTask}/>
          <br/>
          <List tasks={this.state.list}/>
        </div>
    )
  }
}

export default App;

