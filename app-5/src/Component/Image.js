import React, { Component } from 'react'

class Image extends Component {
    render(){
        return(
            <img src={ this.props.myImage} alt='cute-cat'/>
        )
    }
}

export default Image;