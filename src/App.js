import './App.css';
import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from './TodoSearh';
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { TodoButtom } from "./TodoButtom.js";


const todos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  return (
    <div>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>

        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}

      </TodoList>
      <TodoButtom/>
    </div>
  );
}

export default App;
