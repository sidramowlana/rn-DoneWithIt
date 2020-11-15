import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.textStyle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppText;
