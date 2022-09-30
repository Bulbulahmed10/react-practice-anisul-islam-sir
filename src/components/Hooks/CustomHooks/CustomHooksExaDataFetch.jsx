import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const CustomHooksExaDataFetch = () => {
  const {data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadingMessage = <p> Todo is loading ... </p>;

  return (
    <div>
      <h1>Data fetch with useEffect</h1>
      {error && <p> {error} </p>}
      {isLoading && loadingMessage}
      {data &&
        data.map((todo) => {
          return <p key={todo.id}> {todo.title} </p>;
        })}
    </div>
  );
};

export default CustomHooksExaDataFetch;
