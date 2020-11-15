import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppText from "./AppText";

function ListItem({ image, username, description }) {
  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={image} />
      <View>
        <AppText style={styles.textUsernameStyle}>{username}</AppText>
        <AppText style={styles.textDescriptionStyle}>{description}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },

  textUsernameStyle: {
    fontWeight: "bold",
  },
  textDescriptionStyle: {
    color: colors.gray,
  },
});
export default ListItem;
