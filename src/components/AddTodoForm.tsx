import { FormEvent, useState } from "react";
import Button from "./Button";

import useTodos from "../hooks/useTodos";

const AddTodoForm = () => {
  const [todoText, setTodoText] = useState<string>("");
  const context = useTodos();
  const { addTodo } = context;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (todoText === "") {
      alert("No Todo entered");
    }
    if (todoText !== "") {
      addTodo(todoText);
      setTodoText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium text-[#231d15]">Add a Todo</h2>
      <input
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        type="text"
        placeholder="Add a Todo"
        className="h-[45px] border w-full border-black/[12%] rounded-[5px] px-[10px] my-[9px] py-[16px] text-[14px] block"
      />
      <Button buttonText="Add a Todo" buttonType="primary" />
    </form>
  );
};

export default AddTodoForm;
