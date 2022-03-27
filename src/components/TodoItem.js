import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  
  return (
    <div className="">
      <h4 className="text-center my-3">{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger button" onClick={()=>{onDelete(todo)}} >Delete</button>
      <button className="btn btn-success button" onClick={()=>{alert("this task has been completed and will be removed from the list of pending tasks");onDelete(todo)}} >Done</button>
      <hr />


    </div>
  )
}
