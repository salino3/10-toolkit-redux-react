import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosApi";


export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);

  // const {data: todos = [], isLoading} = useGetTodosQuery()
   const {data: todo, isLoading} = useGetTodoQuery(todoId)


 const nextTodo = () => {
    setTodoId(todoId + 1)
 } 

 const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1)
 } 



   return (
     <>
       <h1>Todos - RTK Query</h1>
       <hr className="myHR" />

       <h4>isLoading: {isLoading ? "true" : "false"}</h4>

       <pre>{JSON.stringify(todo)}</pre>

       <button onClick={prevTodo}>Previous Todo</button>
       <button onClick={nextTodo}>Next Todo</button>

       {/* <ul>
        {todos.map(todo => (
            <li key={todo.id} >
            <strong>{todo.completed ? 'done' : 'pending' } </strong>
             { todo.title}</li>
        ))}
    </ul> */}
     </>
   );
}

