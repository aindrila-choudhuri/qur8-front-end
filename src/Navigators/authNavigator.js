import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/signin";
import OtpScreen from "../screens/otp";
import SearchPlacesScreen from "../screens/SearchPlaces";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
      </Stack.Navigator>
   
  );
}

const styles = StyleSheet.create({});
