import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import colors from "../../config/colors";
import ButtonComponent from "./components/ButtonComponent";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.imageBackGroundStyle}
      source={require("../../assets/welcomeImage.jpeg")}
    >
      <View style={styles.viewLogoContainerStyle}>
        <Image
          style={styles.imageLogoStyle}
          source={require("../../assets/logo.jpg")}
        />
        <Text style={styles.textStyle}>Sell What You Dont Need</Text>
      </View>
      <View style={styles.viewButtonContainer}>
        <ButtonComponent title="login" onPress={() => console.log("Login")} />
        <ButtonComponent
          title="register"
          onPress={() => console.log("Register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  imageBackGroundStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  imageLogoStyle: {
    width: 100,
    height: 100,

    borderRadius: 50,
    borderWidth: 5,
    borderColor: colors.gray,
    // ios shadows
    // shadowColor: colors.gray,
    // shadowOffset: { width: 0, height: 10 },
    // shadowOpacity: 1,
    // shadowRadius: 10,
    //android shading
    // elevation: 60,
  },
  viewLogoContainerStyle: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  viewButtonContainer: {
    padding: 15,
    width: "100%",
  },
});
export default WelcomeScreen;
