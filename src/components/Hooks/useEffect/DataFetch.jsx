// import React, { useEffect, useState } from "react";

// const loadingMessage = <p> Todo is loading</p>;

// const DataFetch = () => {
//   const [todos, setTodos] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("fecthing is not successful");
//         } else {
//           return res.json();
//         }
//       })
//       .then((data) => {
//         setTodos(data);
//         setIsLoading(false);
//         setError(null)
//       })
//       .catch((error) => {
//         setError(error.message);
//         setIsLoading(false)
//       });
//   }, []);

//   const todosElement =
//     todos &&
//     todos.map((todo) => {
//       return <p key={todo.id}>{todo.title}</p>;
//     });

//   return (
//     <div>
//       <h1>Todos</h1>
//       {error && <p> {error} </p> }
//       {isLoading && loadingMessage}
//       {todosElement}
//     </div>
//   );
// };

// export default DataFetch;


import React, {useEffect, useState} from 'react'

const loadingMessage = <p> Todo is loading ... </p>

const DataFetch = () => {

  const [todos, setTodos] = useState(null)
  const [isLoading, setIsloading] = useState(true)
  const [error, setError] = useState(null)
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      if(!res.ok) {
        throw Error ("Fatching Unsuccessfull...")
      }
      return res.json()
    })
    .then((data) => {
      setTodos(data)
      setIsloading(false)
      setError(null)
    })
    .catch((error) => {
      setError(error.message)
      setIsloading(false)
    })
  }, [])

  return (
    <div>
      <h1>Data fetch with useEffect</h1>
      {error && <p> {error} </p>}
      {isLoading && loadingMessage}
      { todos && 
        todos.map((todo) => {
        return  <p key={todo.id}> {todo.title} </p>
        })
      }
    </div>
  )
}

export default DataFetch