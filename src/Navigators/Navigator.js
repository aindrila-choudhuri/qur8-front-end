import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../redux/slices/authSlices";
import AuthNavigator from "./authNavigator";
import AppNavigator from "./appNavigator";
const Stack = createNativeStackNavigator();

export default function Navigator() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationContainer>
      
        {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
