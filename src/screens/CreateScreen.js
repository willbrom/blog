import React, { useState, useContext } from "react";
import { View, Button, StyleSheet } from "react-native";
import BlogInput from "../components/BlogInput";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.containerStyle}>
      <BlogInput title="Title" value={title} setValue={setTitle} />
      <BlogInput title="Content" value={content} setValue={setContent} />
      <Button
        title="Save"
        onPress={() => {
          addBlogPost({
            id: state.length.toString(),
            title,
            content,
          });
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

export default CreateScreen;
