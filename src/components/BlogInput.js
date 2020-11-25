import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const BlogInput = ({ title, value, setValue }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>Enter {title}:</Text>
      <TextInput
        style={styles.inputStyle}
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 12,
    marginHorizontal: 12,
  },
  titleStyle: {
    fontSize: 18,
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 8,
    fontSize: 22,
  },
});

export default BlogInput;
