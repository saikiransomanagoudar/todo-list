"use client";

import { useState } from "react";
import { NewToDoForm } from "./_components/new-todo-form";

type ToDoItem = {
  title: string;
  description: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<ToDoItem[]>([
    { title: "Learn React", description: "Learn React", completed: false },
    { title: "Learn Solid", description: "Learn Solid", completed: false },
    { title: "Learn Solid", description: "Learn Solid", completed: false }
  ]);

  return (
    <div className="max-w-screen-md mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <ul className="space-y-2">
        {todos.map(({ title, description, completed }, index) => (
          <ToDoItem
            key={index}
            title={title} 
            description={description} 
            completed={completed} 
            index={index} // Add the 'index' parameter
            onCompleteChanged={(newValue) => {
              setTodos(prev => {
                const newTodos = [...prev];
                newTodos[index].completed = newValue;
                return newTodos;
              })
            }}
          />
        ))}
      </ul>
      <NewToDoForm
        onCreate={(title, description) => {
          setTodos((prev) => {
            const newTodos = [...prev];
            newTodos.push({ title, description, completed: false });
            return newTodos;
          });
        }}
      />
    </div>
  );
}

function ToDoItem({
  title,
  description,
  completed,
  onCompleteChanged
}: {
  title: string;
  description: string;
  complete: boolean;
  onCompleteChanged: (newValue: boolean) => void;
}) {
  return (
    <li className="flex gap-2 border rounded p-2">
      <input
        type="checkbox"
        checked={completed}
        onChange={e =>
          onCompleteChanged(e.target.checked)
        }
      />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      
    </li>
  );
}
