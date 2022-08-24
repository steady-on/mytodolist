//전체 Todo가 Todo, Today's Todo, Done로 나뉘어 보임
import "./TodoList.css";
import Section from "../UI/Section";
import NewTodos from "../NewTodos/NewTodos";

const TodoList = () => {
  return (
    <div className="todolist columns">
      <Section>
        <NewTodos />
      </Section>
      <Section />
      <Section />
    </div>
  );
};

export default TodoList;
