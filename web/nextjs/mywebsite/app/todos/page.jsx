"use client";
import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";

const page = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="my-3 p-3 rounded-md bg-gray-100">
            <strong>{todo.title}</strong> -{" "}
            {todo.completed ? (
              <Badge
                className="bg-green-500 text-white dark:bg-green-600"
              >
                Completed
              </Badge>
            ) : (
              <Badge
                className="bg-yellow-500 text-white dark:bg-yellow-600"
                >Pending</Badge>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
