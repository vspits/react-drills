import React, {Component} from 'react'

class NewTask extends Component {
    constructor(){
        super()
        this.state = {
            input: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleInputChange(value){
        this.setState({
          input: value
        })
    }

    handleAdd(){
        this.props.add(this.state.input)
        this.setState({input: ''})
    }

    render(){
        return(
            <div>
                <input 
                value={this.state.input}
                onChange={event => this.handleInputChange(event.target.value)} 
                placeholder='Enter new task'/>

                <button onClick={this.handleAdd}>Add</button>
          </div>
        )
    }
}

export default NewTask;