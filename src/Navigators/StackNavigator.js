import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";

import "react-native-gesture-handler";
import BottomTabNavigator from "./BottomTab";
import Home from "../screens/Home";
import OfferGeneration from "../screens/OfferGeneration";
import SearchPage from "../screens/SearchPage";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="black" />
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SearchPage"
          component={SearchPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="OfferGeneration"
          component={OfferGeneration}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
