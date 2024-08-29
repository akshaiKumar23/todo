import useTodos from "../hooks/useTodos";

const Counter = () => {
  const context = useTodos();

  const { totalTodos, todosCompleted } = context;

  return (
    <p>
      <b>{todosCompleted}</b>/{totalTodos} todos completed
    </p>
  );
};

export default Counter;
