import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../../config/colors";

function ButtonComponent({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.viewStyle, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  textStyle: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default ButtonComponent;
