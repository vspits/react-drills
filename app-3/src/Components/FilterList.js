import React, { Component } from 'react'

class FilterList extends Component {
    constructor(){
        super()
        this.state = {
            foodList: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
            userInput: '',
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    // filterFoodList(userInput){
    //     let foodList = this.state.foodList
    //     let filteredFoodList = []
    
    //     for(let i = 0; i < foodList.length; i++){
    //         if(foodList[i].includes(userInput)){
    //             filteredFoodList.push(foodList[i])
    //         }
    //     }
    //     this.setState({filteredFoodList: filteredFoodList})
    // }

    render(){
        let displayFood = this.state.foodList.filter((item, index) => {
            return item.includes(this.state.userInput)
        }).map((item, index) => {
            return <h2 key={index}>{item}</h2>
        })

        return (
            <div>
                <input onChange={event => this.handleChange(event.target.value)}/>
                <span>{displayFood}</span>
            </div>
        )
    }
}

export default FilterList;