//전체 Todo가 Todo, Today's Todo, Done로 나뉘어 보임
import "./TodoList.css";
import Section from "../UI/Section";
import TodoForm from "../NewTodos/TodoForm";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const done = todos.filter((todo) => todo.isDone === true);
  const notyet = todos.filter((todo) => todo.isDone !== true);

  return (
    <div className="todolist columns">
      <Section>
        <TodoForm />
      </Section>
      <Section>
        <h2 className="is-size-3 mb-3">Todo</h2>
        <ul>
          {notyet.length === 0 && <p className="is-size-4"> 할일이 없어요! </p>}
          {notyet.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                details={todo.details}
                isDone={todo.isDone}
                color="is-warning"
              />
            );
          })}
        </ul>
      </Section>
      <Section>
        <h2 className="is-size-3 mb-3">Done!</h2>
        <ul>
          {done.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                details={todo.details}
                isDone={todo.isDone}
                color="is-dark"
              />
            );
          })}
        </ul>
      </Section>
    </div>
  );
};

export default TodoList;
