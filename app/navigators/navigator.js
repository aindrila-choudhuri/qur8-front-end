import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app-navigator";
import AuthNavigator from "./auth-navigator";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/slices/authSlice";

const AppRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      {/* Conditional stack navigator rendering based on login state */}

      {/* If isLoggedIn is true, this part will be rendered. It suggests that when
      the user is logged in, the component or navigation structure represented
      by AppNavigator should be displayed */}

      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppRoute;
