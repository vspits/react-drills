import React, { Component } from 'react'

class DisplayData extends Component {
    constructor(){
        super()
        this.state ={
            arrayOfStrings: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
        }
    }

    render(){
        let foodsToDisplay = this.state.arrayOfStrings.map((item, index) => {
            return <h2 key={index}>{item}</h2>
        })

        return(
            <div>
                <h2>{foodsToDisplay}</h2>
            </div>
        )
    }
}

export default DisplayData;