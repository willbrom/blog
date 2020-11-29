import { call } from "react-native-reanimated";
import createDataContext from "./createDataContext";

const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state.concat(action.payload);
    case "edit":
      return state.map((v) => (v.id == action.payload.id ? action.payload : v));
    case "delete":
      return state.filter((v) => v.id != action.payload.id);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return ({ id, title, content }, callback) => {
    dispatch({ type: "add", payload: { id, title, content } });
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return ({ id, title, content }, callback) => {
    dispatch({ type: "edit", payload: { id, title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete", payload: { id } });
  };
};

export const { Context, Provider } = createDataContext(
  Reducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  []
);
