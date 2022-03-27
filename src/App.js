import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { Footer } from './components/Footer';
import React, { useState } from 'react';
import { AddTodo } from './components/AddTodo';
import { Routes, Route } from 'react-router-dom'




function App() {
  const onDelete = (todo) => {
    console.log('i am onDelete', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }


  const addTodo = (title, desc) => {
    console.log("i am adding this to-do", title, desc);
    let sno
    if (todos.length == 0) {
      sno = 0;

    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

 

  const [todos, setTodos] = useState([
    // {
    //   // sno: 1,
    //   // title: 'go to market',
    // //  desc: 'you need to go market to buy grocessry'
    // },
    // {
    //   // sno: 2,
    //   // title: 'go to market2',
    // //  desc: 'you need to go market to buy grocessry2'
    // },
    // {
    //   // sno: 3,
    //   // title: 'go to market3',
    // //  desc: 'you need to go market to buy grocessry3'
    // }
  ]);

  return (
    <div className="App">
      
      <Header title="My ToDo List" searchBar={false} />
      <Footer />
      <Routes>
        <Route path="/" element={<AddTodo addTodo={addTodo} />}/>
        <Route path="/about" element={<Todos todos={todos} onDelete={onDelete} />} />
      </Routes>

    </div>
  );
}

export default App;
