import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from './TodoSearh';
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { TodoButtom } from "./TodoButtom.js";



const defaultodos = [
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:true},
  {text:'Llorar con la llorona', completed:false},
  {text:'como esamos', completed:false}
];

function App() {

  const [todos, setTodos] = React.useState(defaultodos);
  const [searchValue, setSearchaValue] = React.useState("");

  const completedTodos = todos.filter(todo => todo.completed===true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }

  
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }


  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);

  }

  return (
    <div className='bg-gray-100 p-2'>
    <div className='border-solid border-2  border-indigo-600  rounded-[0.5rem] w-full mx-auto p-4 bg-white'>
      
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchaValue}/>
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
           key={todo.text} 
           text={todo.text}
           completed={todo.completed}
           onCompleted={() => completeTodo(todo.text)}
           onDeleted={() => deleteTodo(todo.text)}
          />
        ))}

      </TodoList>
      <TodoButtom/>
    </div>
    </div>
  );
}

export default App;
