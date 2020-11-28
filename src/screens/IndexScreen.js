import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.containerStyle}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={state}
        renderItem={({ item: { id, title, content } }) => {
          return (
            <TouchableOpacity
              style={styles.itemStyle}
              onPress={() =>
                navigation.navigate("Show", { id, title, content })
              }
            >
              <Text style={styles.titleStyle}>{title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(id)}>
                <Feather style={styles.iconStyle} name="trash" size={25} />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather style={styles.iconStyle} name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  containerStyle: {},
  itemStyle: {
    height: 50,
    marginTop: 4,
    marginHorizontal: 6,
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titleStyle: {
    flex: 1,
    marginLeft: 12,
  },
  iconStyle: {
    marginRight: 5,
  },
});

export default IndexScreen;
