import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import colors from "../../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.imageBackGroundStyle}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.viewLogoContainerStyle}>
        <Image
          style={styles.imageLogoStyle}
          source={require("../../assets/icon.png")}
        />
        <Text>Sell What You Dont Need</Text>
      </View>
      <View style={styles.viewLoginStyle}></View>
      <View style={styles.viewRegisterStyle}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  imageBackGroundStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewLoginStyle: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  viewRegisterStyle: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  imageLogoStyle: {
    width: 100,
    height: 100,

    borderRadius: 50,
  },
  viewLogoContainerStyle: {
    position: "absolute",
    top: 130,
    alignItems: "center",
  },
});
export default WelcomeScreen;
