import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState(["learn react", "grind some leet code"]);
  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-br from-zinc-900 to-slate-500">
      <div className="">
        <h3>Todo List</h3>
        <form>
          <input type="text" placeholder="Add a new task" />
          <button className="text-white">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          <Todo />
        </ul>
      </div>
    </div>
  );
}

export default App;
