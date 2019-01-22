import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
    }

    handleUsernameChange(value){
        this.setState({
            usernameInput: value
        })
    }

    handlePasswordChange(value){
        this.setState({
            passwordInput: value
        })
    }

    render(){
        return (
            <div>
                <input onChange={(e) => this.handleUsernameChange(e.target.value)}/>
                <input onChange={(e) => this.handlePasswordChange(e.target.value)}/>
                <button onClick={() => alert('Username: ' + this.state.usernameInput + ' ' + 'Password: ' + this.state.passwordInput)}>Login</button>
            </div>
        )
    }
}

export default Login