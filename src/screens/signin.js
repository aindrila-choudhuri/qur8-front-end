import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { COLOURS, FONT } from "../../constants";
import { useFonts } from "expo-font";
import SignInIcon from "../../assets/SVG/signinIcon";
import ProceedIcon from "../../assets/SVG/proceedIcon";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { setSignIn } from "../redux/slices/authSlice";
import { useState } from "react";


const SignIn = () => {
  const dispatch = useDispatch();
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <LinearGradient COLOURS={["#e0fdff", "#fff"]} useAngle={true} angle={180}>
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
            pattern
          />
        </View>
        <View style={styles.PrimaryBtn}>
          <View style={styles.BtnText}>
            <Text style={styles.proceed}>Proceed</Text>
            <View style={styles.ProceedIcon}>
              <ProceedIcon />
            </View>
          </View>
        </View>
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
    paddingBottom: 0,
  },
  BtnText: {
    borderRadius: 12,
    backgroundColor: COLOURS.primary,
    flex: 1,
    height: 52,
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
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
export default SignIn;
