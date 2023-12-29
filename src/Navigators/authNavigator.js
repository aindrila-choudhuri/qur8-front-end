import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import OtpScreen from "../screens/otp";
import SignInScreen from "../screens/signin";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
    </Stack.Navigator>
  );
}
