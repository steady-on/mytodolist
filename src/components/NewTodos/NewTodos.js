// Add Todo button, 누르면 form 나오게, 취소하면 닫기
import "./NewTodos.css";
import { useState } from "react";
import TodoForm from "./TodoForm";

const NewTodos = () => {
  const [isAdding, setIsAdding] = useState(false);

  const onAddingHandler = () => {
    setIsAdding(true);
  };

  const cancelAddingHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-todo">
      {!isAdding && (
        <button
          className="button is-link is-rounded is-large is-fullwidth "
          onClick={onAddingHandler}
        >
          Add Todo
        </button>
      )}
      {isAdding && <TodoForm onCancel={cancelAddingHandler} />}
    </div>
  );
};

export default NewTodos;
