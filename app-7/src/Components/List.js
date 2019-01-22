import React from 'react'
import Todo from './Todo'

function List(props){
    let list = props.tasks.map((item, index) => {
        return (
            <Todo key={index} task={item}/>
        )
    })

    return (
        <div>
            {list}
        </div>
    )
}

export default List