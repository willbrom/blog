import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const Reducer = (state, action) => {
  switch (action.type) {
    case "get":
      return action.payload;
    case "edit":
      return state.map((v) => (v.id == action.payload.id ? action.payload : v));
    case "delete":
      return state.filter((v) => v.id != action.payload.id);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return async ({ id, title, content }, callback) => {
    try {
      await jsonServer.post("/blogposts", { title, content });
    } catch (e) {
      console.log(e);
    }
    callback();
  };
};

const editBlogPost = (dispatch) => {
  return async ({ id, title, content }, callback) => {
    try {
      await jsonServer.put(`/blogposts/${id}`, { title, content });
      dispatch({ type: "edit", payload: { id, title, content } });
    } catch (e) {
      console.log(e);
    }
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    try {
      await jsonServer.delete(`/blogposts/${id}`);
      dispatch({ type: "delete", payload: { id } });
    } catch (e) {
      console.log(e);
    }
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/blogposts");
      dispatch({ type: "get", payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const { Context, Provider } = createDataContext(
  Reducer,
  { addBlogPost, editBlogPost, deleteBlogPost, getBlogPosts },
  []
);
