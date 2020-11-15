import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.viewContainerStyle}>
      <View style={styles.viewEditStyle}></View>
      <View style={styles.viewCloseStyle}></View>
      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={require("../../assets/viewImage.jpg")}
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
  viewEditStyle: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 20,
    left: 30,
  },
  viewCloseStyle: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 20,
    right: 30,
  },
});
export default ViewImageScreen;
