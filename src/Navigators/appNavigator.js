import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchPlacesScreen from "../screens/SearchPlaces";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchPlaces" component={SearchPlacesScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
