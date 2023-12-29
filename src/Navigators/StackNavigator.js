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
import SearchPage from "../screens/SearchPage";
import OtpScreen from "../screens/otp";
import SignInScreen from "../screens/signin";

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
          name="BottomTab"
          component={BottomTabNavigator}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Otp"
          component={OtpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
