import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState(["learn react", "grind some leet code"]);

  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-br from-zinc-900 to-sl`ate-500 text-white flex justify-center items-center">
      <div className="bg-black/70 w-[90%] md:w-[60%] lg:w-[40%] h-[85%] rounded-xl border border-slate-700 shadow-2xl flex flex-col items-center">
        <h3 className="mt-5 text-4xl font-bold">Todo List</h3>
        <form className="mt-5 flex justify-center items-center gap-3">
          <input
            className="h-10 p-3 bg-gray-700 rounded-lg"
            type="text"
            placeholder="Add a new task"
          />
          <button className=" border border-white rounded hover:text-black hover:bg-white transition duration-300 ease-out hover:ease-in ">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul className="w-full flex flex-col items-center mt-5">
          {todos.map((todo, index) => (
            //passing state in components

            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p>You have xx things to do</p>
      </div>
    </div>
  );
}

export default App;
