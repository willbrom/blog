import React, { useContext } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import BlogContext from "../contex/BlogContext";
import AntDesign from "@expo/vector-icons/AntDesign";

const IndexScreen = () => {
  const { data, onAddBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.containerStyle}>
      <FlatList
        keyExtractor={({ title }) => title}
        data={data}
        renderItem={({ item: { title } }) => {
          return (
            <View style={styles.itemStyle}>
              <Text style={styles.titleStyle}>{title}</Text>
              <AntDesign style={styles.iconStyle} name="arrowright" size={25} />
            </View>
          );
        }}
      />
      <Button title="Add Blog" onPress={() => onAddBlogPost()} />
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
