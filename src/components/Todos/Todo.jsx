import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../redux/modules/todos";
import { useNavigate } from "react-router-dom";

// 개별 Todo의 카드
const Todo = ({ id, title, details, isDone, color }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const onClickToggle = (id) => {
    dispatch(toggleStatusTodo(id));
  };

  const onClickDetail = (id) => {
    navigate(`/details/${id}`);
  };

  const colorname = "message mb-5 " + color;
  return (
    <li>
      <div key={id} className={colorname}>
        <div className="message-header">
          <p className="is-size-4">{title}</p>
        </div>
        <div className="message-body p-3">
          <div className="field">
            <p className="is-size-5">{details}</p>
          </div>
          <div className="controls">
            <button
              className="button is-danger is-small is-light"
              onClick={() => onClickDelete(id)}
            >
              Delete
            </button>
            <button
              className="button is-warning is-small is-light"
              onClick={() => onClickDetail(id)}
            >
              Details
            </button>
            <button
              className="button is-link is-small is-light"
              onClick={() => onClickToggle(id)}
            >
              {isDone ? "Cancel" : "Done!"}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Todo;
