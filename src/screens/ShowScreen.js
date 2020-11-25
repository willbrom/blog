import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const title = navigation.getParam("title");
  const content = navigation.getParam("content");

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.contentStyle}>{content}</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate("Edit", { id, title, content })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 12,
    padding: 4,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "black",
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  contentStyle: {
    marginTop: 12,
    fontSize: 16,
  },
});

export default ShowScreen;
