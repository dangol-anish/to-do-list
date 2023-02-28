import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo }) => {
  return (
    <li className="bg-slate-500 flex flex-row  justify-between p-4 m-2 rounded-lg w-[90%]">
      <div className="flex flex-row gap-2">
        <input type="checkbox" />
        <p>{todo}</p>
      </div>
      <button>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default Todo;
