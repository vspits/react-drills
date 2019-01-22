import React, { Component } from 'react'

class TextBox extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    render(){
        return (
            <div>
                <input onChange={event => this.handleChange(event.target.value)}/>
                <p>{this.state.userInput}</p>
            </div>
        )
    }
}
export default TextBox;