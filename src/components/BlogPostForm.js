import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import BlogInput from "./BlogInput";

const BlogPostForm = ({ callback, initialValue }) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);

  return (
    <View style={styles.containerStyle}>
      <BlogInput title="Title" value={title} setValue={setTitle} />
      <BlogInput title="Content" value={content} setValue={setContent} />
      <Button title="Save" onPress={() => callback(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValue: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 12,
  },
});

export default BlogPostForm;
