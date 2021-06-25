
import './App.css';
import TodoList from './components/TodoList';
import React, {useState} from 'react'
import {AddTodo} from './components/AddTodo';
import { About } from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos,setTodos]= useState(initTodo);
 

  // on delete todo
  const onDelete = (todo) => {
    // todos = todos.splice(todos.indexOf(todo.sno),1); doesnt work in react
    setTodos(todos.filter((e) => {
      console.log(e);
      return e===todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todo));
  }

  const addTodo = (title, desc) => {
    let sno;
    if(localStorage.getItem("todos") === null) {
      initTodo = [];
      // setTodos(initTodo);
    }
    else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    if(!todos) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    
      let todo = {
        sno: sno,
        title: title,
        desc: desc
      }
   
     console.log(todos);
    setTodos([...todos, todo]);
    localStorage.setItem("todos", JSON.stringify(todo));
  }
  
 console.log(todos);
  
  return (
    <Router>
    <div className="App" style={{textAlign: "center"}}>
      <header className="App-header">
        
      <nav>
          <ul style={{ listStyleType: "none"}}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
    
      </header>
      <Switch>
          <Route exact path="/">
          <AddTodo addTodo={addTodo}/>
          <TodoList allTodos={todos} onDelete={onDelete} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      <div>
     
      </div>
    </div>
    </Router>
  );
}

export default App;
