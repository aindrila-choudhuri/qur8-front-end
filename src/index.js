import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

import { store } from "../src/redux/store"

export default function Page() {
  return (
    <>
      <Provider store={store}>
        <AppRoute />
        
        <StatusBar style="auto" />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
