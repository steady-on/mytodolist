import { createAction } from "redux-action";

/* Action Type */
const ADD_TODO = "todo/ADD";
const DELETE_TODO = "todo/DELETE";
const TOGGLE_TODO = "todo/TOGGLE";
const GETID_TODO = "todo/GETID";

/* Action Creator */
export const addTodo = createAction(ADD_TODO, (payload) => payload); // todoitem
export const deleteTodo = createAction(DELETE_TODO, (payload) => payload);
export const toggleStatusTodo = createAction(TOGGLE_TODO, (payload) => payload);
export const getIdTodo = createAction(GETID_TODO, (payload) => payload);

/* Initial State */
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 강의보기",
      details: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: 2,
      title: "점심 먹기",
      details: "점심 뭐먹지..?",
      isDone: true,
    },
  ],
};

/* Reducer */
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    case GETID_TODO:
      return {
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };

    default:
      return state;
  }
};

export default todos;
