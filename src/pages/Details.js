import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getIdTodo } from "../redux/modules/todos";
import Layout from "../components/UI/Layout";

const Details = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const { id } = useParams();
  const todo = todos.find((todo) => todo.id == id);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getIdTodo(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <div className="column is-two-thirds mx-auto">
        <article className="message is-medium">
          <div className="message-header">
            <p>{todo.title}</p>
            <button
              className="delete is-large"
              aria-label="이전으로"
              onClick={() => navigate("/")}
            ></button>
          </div>
          <div className="message-body">
            <p className="is-size-5">{todo.details}</p>
            <p className="is-size-6 has-text-right">ID: {todo.id} </p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Details;
