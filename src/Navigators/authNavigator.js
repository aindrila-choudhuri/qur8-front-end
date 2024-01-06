import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import SignIn from "../components/SignIn";
import OtpScreen from "../screens/otp";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Otp" component={OtpScreen} />
    </Stack.Navigator>
  );
}
