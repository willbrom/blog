import React, { useState, useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import BlogInput from "../components/BlogInput";
import BlogContext from "../context/BlogContext";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data, changeBlogPosts } = useContext(BlogContext);

  return (
    <View style={styles.containerStyle}>
      <BlogInput title="Title" value={title} setValue={setTitle} />
      <BlogInput title="Content" value={content} setValue={setContent} />
      <Button
        title="Save"
        onPress={() =>
          changeBlogPosts("add", { id: data.length.toString(), title, content })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 12,
  },
});

export default CreateScreen;
