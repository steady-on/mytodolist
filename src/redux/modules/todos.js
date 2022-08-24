import { createAction } from "redux-action";

/* Action Type */
const ADD_TODO = "todo/add";
const DELETO_TODO = "todo/delete";
const TOGGLE_TODO = "todo/toggle";
const GETID_TODO = "todo/getId";

/* Action Creator */
export const addTodo = createAction(ADD_TODO, (payload) => payload); // todoitem
export const deleteTodo = createAction(DELETO_TODO, (payload) => payload); // todo_id
export const toggleStatusTodo = createAction(TOGGLE_TODO, (payload) => payload); // todo_id
export const getIdTodo = createAction(GETID_TODO, (payload) => payload); //

/* Initial State */
// { id: 0, title: "", details: "", isDone:false, date: "" }
const initialState = [
  {
    id: 1,
    title: "리액트 강의보기",
    details: "챕터 1부터 챕터 12까지 학습",
    isDone: false,
    date: new Date(2022, 08, 24),
  },
  {
    id: 2,
    title: "점심 먹기",
    details: "점심 뭐먹지..?",
    isDone: true,
    date: new Date(2022, 08, 24),
  },
];

/* Reducer */
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };

    case DELETO_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !isDone } : todo
        ),
      };

    case GETID_TODO:
      return;

    default:
      return state;
  }
};

export default todos;
