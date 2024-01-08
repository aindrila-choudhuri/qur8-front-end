import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";

import AppNavigator from "./appNavigator";
import AuthNavigator from "./authNavigator";
import { selectIsLoggedIn } from "../redux/slices/authSlices";

export default function Navigator() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
