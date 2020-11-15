import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListDetailScreen(props) {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/redJacket.jpg")}
      />
      <View style={styles.viewTextContainer}>
        <AppText style={styles.textTitleStyle}>Red Jacket</AppText>
        <AppText style={styles.textPriceStyle}>$100</AppText>
        <View style={styles.viewListItemContainer}>
          <ListItem
            image={require("../../assets/elijah.jpg")}
            username="Elijah Mikeleson"
            description="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 300,
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
  viewListItemContainer: {
    marginVertical: 50,
  },
});

export default ListDetailScreen;
