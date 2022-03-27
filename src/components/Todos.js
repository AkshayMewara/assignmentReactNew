import React from 'react'
import {TodoItem} from '../components/TodoItem'

export const Todos = (props) => {
    let todosStyle={
        margin:"auto",
        // display:"flex",
    }
  return (
    <div className="container" style={todosStyle}>
        <h3 className="text-center my-3">ToDos List<hr /></h3>
        {props.todos.length===0? "No ToDos to disaplay": 
        props.todos.map((todo)=>{
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })}
        
    </div>
  )
}
