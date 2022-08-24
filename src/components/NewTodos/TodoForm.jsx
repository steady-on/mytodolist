import "./TodoForm.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import { nanoid } from "nanoid";
import { useState } from "react";

const TodoForm = () => {
  const id = nanoid();

  const dispatch = useDispatch();

  const initialTodo = {
    id: "",
    title: "",
    details: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialTodo);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => {
      return { ...prevTodo, [name]: value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.details.trim() === "") return;
    dispatch(addTodo({ ...todo, id }));

    setTodo(initialTodo);
  };

  return (
    <div className="message is-link">
      <div className="message-header">
        <p className="is-size-4">Add Todo</p>
      </div>
      <div className="message-body">
        <form onSubmit={onSubmitHandler}>
          <div className="field">
            <label className="label is-size-5">Title</label>
            <input
              className="input"
              type="text"
              name="title"
              value={todo.title}
              placeholder="뭐해야 됐더라?"
              onChange={onChangeHandler}
            />
          </div>
          <div className="field">
            <label className="label is-size-5">Details</label>
            <input
              className="input"
              type="text"
              name="details"
              value={todo.details}
              placeholder="추가 메모"
              onChange={onChangeHandler}
            />
          </div>
          <div className="controls">
            <button className="button is-link is-small">Add Todo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
