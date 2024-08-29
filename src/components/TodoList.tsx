import { useContext } from "react";

import DeleteButton from "./DeleteButton";
import { TodosContext } from "../contexts/TodosContextProvider";

const TodoList = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("Please Provider Provider");
  }

  const { todos, deleteTodo, toggleTodo } = context;

  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          Start by adding a Todo
        </li>
      )}
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-[8px] h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => toggleTodo(todo)}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <DeleteButton onClick={() => deleteTodo(todo.id)} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
