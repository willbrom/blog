import React, { useState, useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import BlogInput from "../components/BlogInput";
import BlogContext from "../contex/BlogContext";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.containerStyle}>
      <BlogInput title="Title" value={title} setValue={setTitle} />
      <BlogInput title="Content" value={content} setValue={setContent} />
      <Button title="Save" onPress={() => addBlogPost(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 12,
  },
});

export default CreateScreen;
