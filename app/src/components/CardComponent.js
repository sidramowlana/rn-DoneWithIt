import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import colors from "../../../config/colors";

function CardComponent({ title, price, image }) {
  return (
    <View style={styles.viewCardStyle}>
      <Image style={styles.imageStyle} source={image} />
      <View style={styles.viewTextContainer}>
        <AppText style={styles.textTitleStyle}>{title}</AppText>
        <AppText style={styles.textPriceStyle}>{price}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewCardStyle: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  viewTextContainer: {
    padding: 20,
  },
  textTitleStyle: {
    marginBottom: 7,
  },
  textPriceStyle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
export default CardComponent;
