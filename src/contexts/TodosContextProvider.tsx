import { createContext, ReactNode, useEffect, useState } from "react";
import { TodoType } from "../App";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TTodosContext = {
  totalTodos: number;
  todosCompleted: number;
  todos: TodoType[];
  addTodo: (todoText: string) => void;
  deleteTodo: (todoId: number) => void;
  toggleTodo: (todo: TodoType) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

const TodosContextProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useKindeAuth();
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const toggleTodo = (todo: TodoType) => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          t.isCompleted = !t.isCompleted;
        }
        return t;
      })
    );
  };

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  const addTodo = (todoText: string) => {
    const newTodo: TodoType = {
      id: Date.now(),
      text: todoText as string,
      isCompleted: false,
    };
    if (todos.length > 4 && !isAuthenticated) {
      alert("Login to add more");
      return;
    }
    if (todoText !== "") {
      setTodos((prev: TodoType[]) => [...prev, newTodo]);
    }
  };

  const todosCompleted = todos.filter((t) => t.isCompleted === true).length;
  const totalTodos = todos.length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        totalTodos,
        todosCompleted,
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
