import React, { useState, useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import BlogInput from "../components/BlogInput";
import BlogContext from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const [title, setTitle] = useState(navigation.getParam("title"));
  const [content, setContent] = useState(navigation.getParam("content"));
  const { changeBlogPosts } = useContext(BlogContext);
  const id = navigation.getParam("id");

  return (
    <View style={styles.containerStyle}>
      <BlogInput title="New Title" value={title} setValue={setTitle} />
      <BlogInput title="New Content" value={content} setValue={setContent} />
      <Button
        title="Save"
        onPress={() => {
          changeBlogPosts("edit", { id, title, content });
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
