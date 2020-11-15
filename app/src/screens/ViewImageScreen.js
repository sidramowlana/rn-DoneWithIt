import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.viewContainerStyle}>
      <View style={styles.viewCloseStyle}>
        <MaterialCommunityIcons name="close" size={30} color="white" />
      </View>
      <View style={styles.viewDeleteStyle}>
        <MaterialCommunityIcons name="delete" size={30} color="white" />
      </View>
      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={require("../../assets/viewImage.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  viewContainerStyle: {
    backgroundColor: colors.black,
    flex: 1,
  },
  viewCloseStyle: {
    position: "absolute",
    top: 20,
    left: 30,
  },
  viewDeleteStyle: {
    position: "absolute",
    top: 20,
    right: 30,
  },
});
export default ViewImageScreen;
