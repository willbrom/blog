import React, { useReducer } from "react";

const BlogContext = React.createContext();

const Reducer = (state, action) => {
  // state === [{id, title, content}]
  // action === { type: add || edit, payload: {id , title, content} }

  switch (action.type) {
    case "add":
      return state.concat(action.payload);
    case "edit":
      return state.map((v) => (v.id == action.payload.id ? action.payload : v));
    default:
      break;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, []);

  const addBlogPost = (title, content) => {
    dispatch({
      type: "add",
      payload: { id: state.length.toString(), title, content },
    });
  };

  const editBlogPost = (id, title, content) => {
    dispatch({
      type: "edit",
      payload: { id, title, content },
    });
  };

  return (
    <BlogContext.Provider value={{ data: state, addBlogPost, editBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
