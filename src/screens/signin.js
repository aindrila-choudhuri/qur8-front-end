import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import ProceedIcon from "../../assets/SVG/proceedIcon";
import SignInIcon from "../../assets/SVG/signinIcon";
import { COLOURS } from "../constants";

const SignInScreen = () => {
  const [number, onChangeNumber] = React.useState("");
  const navigation = useNavigation();
  const handlePress = () => {
    if (!number || number.length !== 10) {
      // Display an alert or take any other action
      alert("Please enter your 10 digit phone number");
      return; // Do not proceed further
    }
    navigation.navigate("Otp");
  };
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#e0fdff", "#F3F4F8"]}
        locations={[0, 1]}
        useAngle="true"
        angle={180}
      >
        <View style={styles.downPop}>
          <View style={styles.signLeft}>
            <Text style={styles.HeadText}>Sign In</Text>
            <Text style={styles.signIntro}>
              Signing in will help you make deals faster
            </Text>
          </View>
          <View style={styles.SignInIcon}>
            <SignInIcon />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.phNo}>Phone Number</Text>
          <TextInput
            style={styles.number}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter your phone number"
            keyboardType="numeric"
            minLength={10}
            maxLength={10}
            pattern
          />
        </View>
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.PrimaryBtn}>
            <View style={styles.BtnText}>
              <Text style={styles.proceed}>Proceed</Text>
              <View style={styles.ProceedIcon}>
                <ProceedIcon />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.footerParent}>
          <Text style={styles.textNormal}>I agree to Qur8's </Text>
          <Text style={styles.textBold}>Terms & Conditions </Text>
          <Text style={styles.textNormal}>&</Text>
          <Text style={styles.textBold}> Privacy Policy</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  downPop: {
    flexDirection: "row",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },
  signLeft: {
    justifyContent: "center",
  },
  HeadText: {
    fontSize: 32,
    color: COLOURS.primary,
    textAlign: "left",
    alignSelf: "stretch",
    fontWeight: "bold",
  },
  signIntro: {
    fontSize: 12,
    color: COLOURS.tertiary,
    marginTop: 8,
  },
  SignInIcon: {
    flex: 1,
    alignItems: "flex-end",
  },
  bottomContainer: {
    paddingTop: 24,
    paddingBottom: 36,
    paddingLeft: 16,
    paddingRight: 16,
  },
  phNo: {
    paddingLeft: 24,
    color: "#557184",
  },
  number: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: COLOURS.tertiary,
    color: "#557184",
  },
  PrimaryBtn: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 16,
    height: 60,
    paddingBottom: 0,
  },
  BtnText: {
    borderRadius: 12,
    backgroundColor: COLOURS.primary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: "row",
  },
  ProceedIcon: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 4,
  },
  proceed: {
    fontWeight: "600",
    color: COLOURS.white,
  },
  footerParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 16,
  },
  textNormal: {
    fontSize: 12,
    color: COLOURS.tertiary,
  },
  textBold: {
    fontSize: 12,
    fontWeight: "600",
    color: COLOURS.primary,
  },
});
export default SignInScreen;
