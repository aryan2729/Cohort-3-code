//csr

"use client"; // 🔥 Required for Client Components

import { useEffect, useState } from "react";

export default function TodosPage() {

  const [todos, setTodos] = useState<any[]>([]);


  useEffect(() => {
    
    // ✅ Fetch runs in the browser, not during pre-render
    async function fetchTodos() {

      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const data = await res.json();

      setTodos(data); 

    }

    fetchTodos();
  }, []);



  return (
    <div>

      <h1>Todos (CSR)</h1>

      {todos.map((todo) => (
        <div key={todo.id}>

            {todo.id}
            {todo.title}

        </div>
      ))}
    </div>
  );
}
