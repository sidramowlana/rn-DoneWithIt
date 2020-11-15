import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";
// import CardComponent from "./components/CardComponent";
import ListDetailScreen from "./ListDetailScreen";
import ViewImageScreen from "./ViewImageScreen";

function WorkWithMoshScreen(props) {
  return (
    // <View style={styles.viewStyle}>
    //   <CardComponent
    //     title="Red Jacket For Sell"
    //     price="$100"
    //     image={require("../../assets/redJacket.jpg")}
    //   />
    // </View>
    // <ListDetailScreen />
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: colors.paleBackGoundGray,
    padding: 20,
    paddingTop: 100,
  },
});
export default WorkWithMoshScreen;
