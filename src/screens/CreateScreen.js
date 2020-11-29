import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      callback={(title, content) =>
        addBlogPost(
          {
            id: Math.floor(Math.random() * 9999).toString(),
            title,
            content,
          },
          () => navigation.popToTop()
        )
      }
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
