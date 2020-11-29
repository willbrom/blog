import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const id = navigation.getParam("id");

  const { title, content } = state.find((v) => v.id === id);

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.contentStyle}>{content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");

  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
        <Feather style={styles.headerIconStyle} name="edit-2" size={25} />
      </TouchableOpacity>
    ),
  };
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
  headerIconStyle: {
    marginRight: 12,
  },
});

export default ShowScreen;
