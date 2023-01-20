import React from 'react';
import { TodoContext } from './TodoContext';

import { TodoCounter } from "../componets/TodoCounter";
import { TodoSearch } from '../componets/TodoSearh';
import { TodoList } from "../componets/TodoList.js";
import { TodoItem } from "../componets/TodoItem.js";
import { TodoButtom } from "../componets/TodoButtom.js";
import { Header } from "../componets/Header"
import { Modal } from '../modal';
import { AddModal } from '../componets/AddModal';
import { Loading } from './Loading';
import { LoadingTodos } from './LoadingTodos';
import { Error404 } from './Error404';


function Todo() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext) 

  return (
    <div className='bg-gray-100'>
    <div className='h-full border-solid border-2  border-gray-500  rounded-[0.5rem] w-96 mx-auto p-4 bg-white'>
      <Header/>
      <TodoSearch/> 
      {/* searchValue={searchValue} setSearchValue={setSearchaValue} */}
      <TodoCounter/>
      <TodoList>
       {loading && <Loading/>}
       {error && <Error404/>}
       {(!loading && !searchedTodos.length) && <LoadingTodos/>}
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

       {!!openModal && (
        <Modal>
        <AddModal/>
       </Modal>
       )}

      <TodoButtom setOpenModal={setOpenModal}/>
    </div>
    </div>
  );
}

export { Todo };
