// New Todos에서 Add button을 누르면 나오는 입력 폼
// Title, Details, Date 입력할 수 있게
import "./TodoForm.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import { useState } from "react";
import { nanoid } from "nanoid";

const TodoForm = ({ onCancel }) => {
  const dispatch = useDispatch();

  const initialTodo = {
    id: "",
    title: "",
    details: "",
    isDone: false,
    date: "",
  };

  const [todo, setTodo] = useState(initialTodo);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => {
      return { ...prevTodo, [name]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      todo.title.trim() === "" ||
      todo.details.trim() === "" ||
      todo.date.trim() === ""
    )
      return;

    setTodo((prevTodo) => {
      return { ...prevTodo, id: nanoid(), date: new Date(prevTodo.date) };
    });

    dispatch(addTodo(todo));

    setTodo(initialTodo);
  };

  return (
    <article className="message is-link">
      <div className="message-header">
        <p>Add Todo</p>
      </div>
      <div className="message-body">
        <form onSubmit={submitHandler}>
          <div className="field">
            <label className="label">Title</label>
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
            <label className="label">Details</label>
            <input
              className="input"
              type="text"
              name="details"
              value={todo.details}
              placeholder="추가 메모"
              onChange={onChangeHandler}
            />
          </div>
          <div className="field">
            <label className="label">Date</label>
            <input
              className="input"
              name="date"
              value={todo.date}
              type="date"
              onChange={onChangeHandler}
            />
          </div>
          <div className="controls">
            <button className="button is-danger" onClick={onCancel}>
              Cancel
            </button>
            <button className="button is-link" type="submit">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default TodoForm;
