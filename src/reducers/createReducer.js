export const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

/*************USAGE***************/

/*************ACTIONS***************/
export const actionTypes = {
  updateToDo: "TODO_UPDATE",
  createToDo: "TODO_CREATE",
};

/*************ACTION CREATORS***************/
export const updateToDo = (todo) => ({
  todo,
  type: actionTypes.updateToDo,
});

export const createToDo = (todo) => ({
  todo,
  type: actionTypes.createToDo,
});

/*************REDUCER***************/
const insertToDo = (state, todo) => ({
  ...state,
  todos: {
    ...state.todos,
    [todo.id]: todo,
  },
});

export const createReducer =
  ({ todos: {} },
  {
    [actionTypes.createToDo]: insertToDo,
    [actionTypes.updateToDo]: insertToDo,
  });

/*************COMBINE REDUCER***************/
import { combineReducers } from "redux";
import { toDos } from "toDoReducer"; // on the top
import { anotherReducer } from "anotherLocation";

export default combineReducers(
  [toDos, anotherReducer].reduce((memo, r) => ({
    ...memo,
    [r.stateKey]: createReducer(r.initial, r.handlers),
  })),
  {}
);
