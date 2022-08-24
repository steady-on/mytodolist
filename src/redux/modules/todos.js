/* Action Type */
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const GETID_TODO = "GETID_TODO";

/* Action Creator */
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
}; // todoitem
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

export const getIdTodo = (payload) => {
  return {
    type: GETID_TODO,
    payload,
  };
};

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
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };

    case GETID_TODO:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };

    default:
      return state;
  }
};

export default todos;
