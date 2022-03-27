import React from 'react'
import react,{useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const Submit = (e) =>{
        e.preventDefault();
        if(!title||!desc){
            alert("title or description can't be empty");
        }
        else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className = "container my-3">
            <h3 className = "text-center">Add a Task</h3>
            <form onSubmit={Submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange = {(e) => {setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange = {(e) => {setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary" >Submit</button>
                <div className="click">
                    Click on Todos list to view your list
                </div>
            </form>
        </div>
    )
}
