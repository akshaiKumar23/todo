import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw Error("Forgot to add Provider");
  }

  return context;
};

export default useTodos;
