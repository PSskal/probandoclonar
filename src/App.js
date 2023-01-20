import React from 'react';
import { useLocalStorage } from "./hooks/LocalStorage.js";
import { TodoCounter } from "./componets/TodoCounter";
import { TodoSearch } from './componets/TodoSearh';
import { TodoList } from "./componets/TodoList.js";
import { TodoItem } from "./componets/TodoItem.js";
import { TodoButtom } from "./componets/TodoButtom.js";
import { Header } from "./componets/Header"



// const defaultodos = [
//   {text:'Drink 500 ml water', completed:true, time: 3},
//   {text:'Tormar el curso de intro a react', completed:true, time: 4},
//   {text:'Llorar con la llorona', completed:false, time:7},
//   {text:'como esamos', completed:false, time:2},
//   {text:'como esamos', completed:false, time:2},
//   {text:'como esamos', completed:false, time:2},
//   {text:'como esamos', completed:false, time:2},
  
// ];

function App() {



  const {item:todos, saveItem: saveTodos, loading, error,} = useLocalStorage('TODOS_V2', []);
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
    saveTodos(newTodos);
  }


  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  }

  return (
    <div className='bg-gray-100 p-2'>
    <div className='border-solid border-2  border-indigo-600  rounded-[0.5rem] w-96  mx-auto p-4 bg-white'>
      <Header/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchaValue}/>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      
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

export default App;
