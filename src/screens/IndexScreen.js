import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import BlogContext from "../context/BlogContext";
import AntDesign from "@expo/vector-icons/AntDesign";

const IndexScreen = ({ navigation }) => {
  const { data } = useContext(BlogContext);

  return (
    <View style={styles.containerStyle}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={data}
        renderItem={({ item: { id, title, content } }) => {
          return (
            <TouchableOpacity
              style={styles.itemStyle}
              onPress={() =>
                navigation.navigate("Show", { id, title, content })
              }
            >
              <Text style={styles.titleStyle}>{title}</Text>
              <AntDesign style={styles.iconStyle} name="arrowright" size={25} />
            </TouchableOpacity>
          );
        }}
      />
      <Button title="Add Blog" onPress={() => navigation.navigate("Create")} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
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
