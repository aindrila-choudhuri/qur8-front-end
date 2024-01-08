import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Otp from "../components/Otp";
import SignIn from "../components/SignIn";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Otp" component={Otp} />
    </Stack.Navigator>
  );
}
