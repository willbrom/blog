import React, { useState, useContext, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";
import BlogInput from "../components/BlogInput";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { state, editBlogPost } = useContext(BlogContext);
  const id = navigation.getParam("id");

  useEffect(() => {
    const BlogPost = state.find((v) => v.id === id);
    setTitle(BlogPost.title);
    setContent(BlogPost.content);
  }, []);

  return (
    <View style={styles.containerStyle}>
      <BlogInput title="New Title" value={title} setValue={setTitle} />
      <BlogInput title="New Content" value={content} setValue={setContent} />
      <Button
        title="Save"
        onPress={() => {
          editBlogPost({ id, title, content });
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 12,
  },
});

export default EditScreen;
