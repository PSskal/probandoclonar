import React from 'react';
import { Todo } from "./containers/Todo.jsx"
import { TodoProvider } from "./containers/TodoContext/index.js"


function App() {

  return (
    <TodoProvider>
      <Todo/>
    </TodoProvider>
    
      // <Router>
      //   <Routes>
      //     {/* Error Display */}
      //     <Route path="*" element={<Error404/>}/>

      //     {/* Home Display */}
      //     <Route path="/" element={<Todo/>}/>


      //     <Route path="/cursos" element={<Courses/>}/>
      //     <Route path="/curso/detalle/:course_uuid" element={<CourseDetail/>}/>

      //   </Routes>
      // </Router>
    
  );
}

export default App;
