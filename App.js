import React from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
// import WelcomeScreen from "./app/src/screens/WelcomeScreen";
// import ViewImageScreen from "./app/src/screens/ViewImageScreen";
import WorkWithMoshScreen from "./app/src/screens/WorkWithMoshScreen";

export default function App() {
  const { height, width } = useDimensions().window;
  const landscape = width > height;
  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    <WorkWithMoshScreen />
  );
}

const styles = StyleSheet.create({});
