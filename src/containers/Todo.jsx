import React from 'react';
import { TodoContext } from './TodoContext';

import { TodoCounter } from "../componets/TodoCounter";
import { TodoSearch } from '../componets/TodoSearh';
import { TodoList } from "../componets/TodoList.js";
import { TodoItem } from "../componets/TodoItem.js";
import { TodoButtom } from "../componets/TodoButtom.js";
import { Header } from "../componets/Header"


function Todo() {

  const {loading,error,searchedTodos,completeTodo,deleteTodo} = React.useContext(TodoContext) 

  return (
    <div className='bg-gray-100 p-2'>
    <div className='border-solid border-2  border-indigo-600  rounded-[0.5rem] w-96  mx-auto p-4 bg-white'>
      <Header/>
      <TodoSearch/> 
      {/* searchValue={searchValue} setSearchValue={setSearchaValue} */}
      <TodoCounter/>
      <TodoList>
       {loading && <p>Estamos cargando....</p>}
       {error && <p>hubo un errro</p>}
       {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
       {searchedTodos.map(todo => (
       <TodoItem 
          key={todo.text} 
          text={todo.text}
          time={todo.time}
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

export { Todo };
