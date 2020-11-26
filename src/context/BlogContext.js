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
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, []);

  const changeBlogPosts = (type, { id, title, content }) => {
    dispatch({
      type: type,
      payload: { id, title, content },
    });
  };

  return (
    <BlogContext.Provider value={{ data: state, changeBlogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
