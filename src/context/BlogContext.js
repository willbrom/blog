import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = (title, content) => {
    setBlogPosts([
      ...blogPosts,
      { id: blogPosts.length.toString(), title, content },
    ]);
  };

  const editBlogPost = (id, title, content) => {
    let temp = blogPosts.map((v) =>
      v.id == id ? { ...v, title, content } : v
    );
    setBlogPosts(temp);
  };

  return (
    <BlogContext.Provider
      value={{ data: blogPosts, addBlogPost, editBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
